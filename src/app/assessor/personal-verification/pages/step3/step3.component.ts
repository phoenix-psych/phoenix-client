import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from 'src/app/models/assessor-utilities';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup

  foods: Food[] = [
    {value: '1', viewValue: 'New to counselling (Up to 1 year)'},
    {value: '2', viewValue: 'Building experience (up to 2 years)'},
    {value: '3', viewValue: 'Highly Competent (3-5 years)'},
    {value: '4', viewValue: 'Seasoned (5 years+)'},
  ];

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) {
  }

  selectedValue!: string;

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: [''],
      answer4: [''],
      answer5: [''],
      answer6: [''],
      answer7: [''],
    });

  }

}
