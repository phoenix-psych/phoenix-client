import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../shared/notify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements  OnInit {

  constructor(private notificationService: NotifyService) 
  {
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
  }
  
  ngOnInit() {
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
      alert("submit : ");
    
      this.form.reset();
      this.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  
  onClose() {
    this.form.reset();
    this.initializeFormGroup();
  }
}


