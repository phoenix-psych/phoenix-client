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
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddComponent } from './add/add.component';

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
  displayedColumns: string[] = ['id','name','dob','email','phone', 'status', 'actions'];
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
    dialogConfig.height = "60%";
    this.dialog.open(AddComponent,dialogConfig);
  }

  onTest(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.autoFocus= false,
    dialogConfig.height= '100%' 
    dialogConfig.width = "100%";
    this.dialog.open(TestComponent,dialogConfig);
  }

  onEdit(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddComponent,dialogConfig);
  }

  onReport(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.autoFocus= false,
    dialogConfig.maxHeight= '90vh' 
    this.dialog.open(Report1Component,dialogConfig);
  }


  onDelete(id: any){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        // this.service.deleteUser(id);
        // this.notificationService.warn('! Deleted successfully');
      }
    });
  }
}
