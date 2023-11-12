import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food,Task } from 'src/app/models/assessor-utilities';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss']
})
export class Step7Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) {
  }

  selectedValue!: string;
  selectedValueConvictionGp!: string;
  selectedValueDisability!: string;
  
  gender: Food[] = [
    {value: '1', viewValue: 'Male'},
    {value: '2', viewValue: 'Female'},
    {value: '3', viewValue: 'Intersex'},
    {value: '4', viewValue: 'Non-binary'},
    {value: '5', viewValue: 'Prefer not to say'},
  ];

  
  ageRange: Food[] = [
    {value: '1', viewValue: '16-24'},
    {value: '2', viewValue: '25-29'},
    {value: '3', viewValue: '30-39'},
    {value: '4', viewValue: '40-49'},
    {value: '5', viewValue: '50-64'},
    {value: '6', viewValue: '65+'},
    {value: '7', viewValue: 'Prefer not to say'},
  ];

  task2: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Prefer not to say', completed: false, color: 'primary'},
      {name: 'Asian or Asian British - Indian', completed: false, color: 'accent'},
      {name: 'Asian or Asian British - Pakistani', completed: false, color: 'warn'},
      {name: 'Asian or Asian British - Bangladeshi', completed: false, color: 'warn'},
      {name: 'Asian or Asian British -Chinese', completed: false, color: 'warn'},
      {name: 'Black, African, Caribbean or Black British - African', completed: false, color: 'warn'},
      {name: 'Black, African, Caribbean or Black British - Caribbean', completed: false, color: 'warn'},
      {name: 'Mixed or Multiple ethnic groups - White and Black caribbean', completed: false, color: 'warn'},
      {name: 'Mixed or Multiple ethnic groups - White and Black African', completed: false, color: 'warn'},
      {name: 'Mixed or Multiple ethnic groups - White and Asian', completed: false, color: 'warn'},
      {name: 'White - English', completed: false, color: 'warn'},
      {name: 'White - Welsh', completed: false, color: 'warn'},
      {name: 'White - Scottish', completed: false, color: 'warn'},
      {name: 'White - Northern Irish', completed: false, color: 'warn'},
      {name: 'White - Irish', completed: false, color: 'warn'},
      {name: 'White - British', completed: false, color: 'warn'},
      {name: 'White - Gypsy/traveller', completed: false, color: 'warn'},
      {name: 'Other ethnic group - Arab', completed: false, color: 'warn'},
    ],
  };



  ngOnInit(): void {
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

  updateAllComplete() {
  }

}
