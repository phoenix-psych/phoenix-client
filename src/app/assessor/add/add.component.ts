import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AssessorType } from 'src/app/models/assessor-type.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { AssessorService } from '../assessor.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public userTypes: AssessorType[]=[];
  constructor(public service: AssessorService,
    private notificationService: NotifyService,
    public dialogRef: MatDialogRef<AddComponent>) { }


  ngOnInit() {
    this.service.getUsers()
    .subscribe({
      next: (user) =>{
        console.log(user);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('id')?.value)
        this.service.insertUser(this.service.form.value);
      else
      this.service.updateUser(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
