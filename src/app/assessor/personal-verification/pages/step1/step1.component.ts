import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AssessorAnswer } from 'src/app/models/assessor-answer.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})

export class Step1Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) {
  }

  selectedValue2!: string;
  selectedValue4!: string;
  selectedValue5!: string;
  selectedValue6!: string;
  other6!: string;
  other7!: string;

  // multi select 
  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Specialist Assessor - Diagnostic Assessment (Education)', completed: false, color: 'accent'},
      {name: 'Specialist Assessor - Diagnostic Assessment (Workplace)', completed: false, color: 'accent'},
      {name: 'Specialist Assessor - EAA', completed: false, color: 'accent'},
      {name: 'Specialist Tutoring - SpLD Post 16 and HE', completed: false, color: 'accent'},
      {name: 'Specialist Tutoring - Pre-16', completed: false, color: 'accent'},
      {name: 'SpLD Coach - Education', completed: false, color: 'accent'},
      {name: 'SpLD Coach - Workplace', completed: false, color: 'accent'},
      {name: 'Occupational Psychologist (chartered)', completed: false, color: 'accent'},
      {name: 'Psychologist', completed: false, color: 'accent'},
      {name: 'Counsellor', completed: false, color: 'accent'},
    ],
  };

  task2: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'PATOSS', completed: false, color: 'accent'},
      {name: 'BDA', completed: false, color: 'accent'},
      {name: 'Dyslexia Guild', completed: false, color: 'accent'},
      {name: 'SASC', completed: false, color: 'accent'},
      {name: 'British Psychological Society', completed: false, color: 'accent'},
      {name: 'Other', completed: false, color: 'accent'},
    ],
  };

  allComplete: boolean = false;

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

    this.http.get<AssessorAnswer>(this.baseUrl + 'assessor/answer?page='+ 1 + '', this.setHeader()).subscribe({
      next: (x) =>{
        this.form = this.formBuilder.group(x);
        this.selectedValue2 = this.form.get('answer2')?.value;
        let answer1  = this.form.get('answer1')?.value;
        var splitted = answer1.split(","); 
        if (this.task.subtasks != null) {
          this.task.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  onRadioChange2(event: string) {
    if (this.form)
    {
      this.form.patchValue({
        answer2:event
      });
    }

    if(event == 'true'){
      this.form.get('answer3')?.addValidators(Validators.required);               
      this.form.get('answer3')?.updateValueAndValidity();              
      this.form.get('answer4')?.addValidators(Validators.required);     
      this.form.get('answer4')?.updateValueAndValidity();              
      this.form.get('answer5')?.addValidators(Validators.required);           
      this.form.get('answer5')?.updateValueAndValidity();                    
      this.form.get('answer6')?.addValidators(Validators.required);           
      this.form.get('answer6')?.updateValueAndValidity();                    
      this.form.get('answer7')?.addValidators(Validators.required);          
      this.form.get('answer7')?.updateValueAndValidity();                     
    } else {                
      this.form.get('answer3')?.clearValidators();        
      this.form.get('answer3')?.updateValueAndValidity();              
      this.form.get('answer4')?.clearValidators();             
      this.form.get('answer4')?.updateValueAndValidity();            
      this.form.get('answer5')?.clearValidators();             
      this.form.get('answer5')?.updateValueAndValidity();            
      this.form.get('answer6')?.clearValidators();              
      this.form.get('answer6')?.updateValueAndValidity();           
      this.form.get('answer7')?.clearValidators();               
      this.form.get('answer7')?.updateValueAndValidity();          
    }
  }

  onRadioChange6() {
    if (this.form && this.selectedValue6)
    {
      this.form.patchValue({
        answer6: this.selectedValue6 === "Other" ? this.other6 : this.selectedValue6
      });
    }
  }

  updateTask1Node(type: string) {
    //this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.filter(x=>x.name == type).forEach(t => (t.completed = !t.completed));
    this.patchAnswer1();
  }

  updateTask2Node(type: string) {
    //this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    if (this.task2.subtasks == null) {
      return;
    }
    this.task2.subtasks.filter(x=>x.name == type).forEach(t => (t.completed = !t.completed));
    this.patchAnswer3();
  }

  // someComplete(): boolean {
  //   if (this.task.subtasks == null) {
  //     return false;
  //   }

  //   return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  // }

  // setAll(completed: boolean) {
  //   this.allComplete = completed;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach(t => (t.completed = completed));
  // }

  patchAnswer1(){
    if(this.form)
    {
      this.form.patchValue({
        answer1: this.task.subtasks?.filter(x=>x.completed == true).map(x => x.name).join(',')
      });
    }
  }

  patchAnswer3(){
    if(this.form)
    {
      this.form.patchValue({
        answer3: this.task2.subtasks?.filter(x=>x.completed == true).map(x => x.name).join(',')
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.patchValue({
      });

      //var jsonString = JSON.parse( JSON.stringify(this.form.value));
      this.http.post(this.baseUrl + 'assessor/answer?page='+ 1 + '', this.form.value, this.setHeader()).subscribe({
        next: (x) =>{
          console.log(x);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
      //this.form.reset();
      //this.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      //this.onClose();
    }
  }
  
  setHeader() {
    var userId = localStorage.getItem('userId');
    var token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      UserId : userId || ''
    });
    return {
      headers: headers
   };
  }
}
