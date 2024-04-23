import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { Report1Component } from './report1/report1.component';
import { TestComponent } from './test/test.component';
import { Observable } from 'rxjs';
import { ClientDto } from 'src/app/models/common/client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddComponent } from './add/add.component';
import { ScreeningResultComponent } from './screening-result/screening-result.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  
  constructor(
    private dialog: MatDialog, 
    private http: HttpClient,
    private notificationService: NotifyService,
    private dialogService: DialogService) { }

  listData: MatTableDataSource<ClientDto> = new MatTableDataSource<ClientDto>;
  displayedColumns: string[] = ['name','dob','genderString','serviceName','email','phone', 'address', 'university', 'course', 'courseYear', 'status', 'actions']; // 'id',
  @ViewChild(MatSort) sort = new MatSort ;
  @ViewChild(MatPaginator) paginator = MatPaginator;
  searchKey: string = "";
  loading = true;

  ngOnInit() {
    // let client = new Client('12we','JS','in progress');
    // this.listData.data.push(client);
    
    this.getClients().subscribe(
      list => {
        this.loading = false;
        let array = list.map(item => {
          return item;
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        // this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data.name.toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }
  
  getClients() : Observable<ClientDto[]> {
    return this.http.get<ClientDto[]>(this.baseUrl + 'client');
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "80%";
    this.dialog
      .open(AddComponent, dialogConfig)
      .afterClosed()
      .subscribe(x => {
          this.ngOnInit();
      });

  }

  onTest(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.autoFocus= false,
    dialogConfig.height= '100%' 
    dialogConfig.width = "100%";
    dialogConfig.data = row;
    this.dialog.open(TestComponent,dialogConfig);
  }

  onForm(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.autoFocus= false,
    dialogConfig.height= '100%' 
    dialogConfig.width = "100%";
    dialogConfig.data = row;
    this.dialog.open(ScreeningResultComponent,dialogConfig);
  }

  onEdit(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height= '60%' 
    dialogConfig.data = row;
    this.dialog.open(AddComponent,dialogConfig);
  }

  onReport(row: ClientDto){
    this.http.get(`${this.baseUrl}individual/${row.id}/word`, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${row.name}.docx`; 
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  onDelete(id: any){

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.deleteUser(id).subscribe((s) => {
          this.ngOnInit();
          this.notificationService.warn('! Deleted successfully');
        });
      }
    });
  }

  deleteUser(clientId: any) {
    //return this.http.delete<ClientDto>(this.baseUrl + 'client' , clientId);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: clientId.toString(),
      },
    };
    
    return this.http
      .delete(this.baseUrl + 'client', options);
  }
}
