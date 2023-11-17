import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name : string = '';
  dob : Date = new Date();

  form !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService,
    public dialogRef: MatDialogRef<TestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto
    ) { }


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
