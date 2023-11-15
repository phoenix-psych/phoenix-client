import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService,
    public dialogRef: MatDialogRef<AddComponent>) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      status: [''],
    });
  }

  onClear() {
    
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.form.valid) {
      // if (!this.form.get('id')?.value)
      //   this.service.insertUser(this.service.form.value);
      // else
      //   this.service.updateUser(this.service.form.value);
      this.form.reset();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.form.reset();
    this.dialogRef.close();
  }

}
