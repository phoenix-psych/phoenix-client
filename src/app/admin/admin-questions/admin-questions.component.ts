import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from 'src/app/models/question.model';
import { DialogService } from 'src/app/shared/dialog.service';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-questions',
  templateUrl: './admin-questions.component.html',
  styleUrls: ['./admin-questions.component.scss']
})
export class AdminQuestionsComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private service: AdminService,
    private dialogService: DialogService) { }

  listData: MatTableDataSource<Question> = new MatTableDataSource<Question>;
  displayedColumns: string[] = ['question','questionType','questionGroup', 'option1', 'option2', 'option3', 'option4'];
  @ViewChild(MatSort) sort = new MatSort ;
  @ViewChild(MatPaginator) paginator = MatPaginator;
  searchKey: string = "";
  loading = true;

  ngOnInit() {
    this.service.getQuestions().subscribe(
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
            return ele != 'actions' && data.Question.toLowerCase().indexOf(filter) != -1;
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
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "80%";
    dialogConfig
    this.dialog.open(AddQuestionComponent,dialogConfig);
  }

  onEdit(row: any){
    // this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "80%";
    this.dialog.open(AddQuestionComponent,dialogConfig);
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