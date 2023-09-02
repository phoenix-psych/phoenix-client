import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/dialog.service';
import { AssessorService } from '../assessor.service';
import { Assessor } from 'src/app/models/assessor.model';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from '../add/add.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: AssessorService,
    private dialog: MatDialog,
    // private notificationService: NotifyService,
    private dialogService: DialogService) { }

  listData: MatTableDataSource<Assessor> = new MatTableDataSource<Assessor>;
  displayedColumns: string[] = ['firstname','fullName', 'email', 'mobile', 'city', 'userType', 'actions'];
  @ViewChild(MatSort) sort = new MatSort ;
  @ViewChild(MatPaginator) paginator = MatPaginator;
  searchKey: string = "";
  loading = true;

  ngOnInit() {
    this.service.getUsers().subscribe(
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
            return ele != 'actions' && data.fullName.toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddComponent,dialogConfig);
  }

  onEdit(row: any){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddComponent,dialogConfig);
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
