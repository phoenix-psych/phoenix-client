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
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component implements OnInit {

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
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Frequently  ', completed: false, color: 'accent'},
      {name: 'Always  ', completed: false, color: 'accent'},
      {name: 'Not Applicable   ', completed: false, color: 'accent'},
      
    ],
  };

  task2: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
    
    ],
  };

  allComplete: boolean = false;

  ngOnInit() {

    this.form = this.formBuilder.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required],
      q12: ['', Validators.required],
      q13: ['', Validators.required],
      q14: ['', Validators.required],
      q15: ['', Validators.required],
      q16: ['', Validators.required],
      q17: ['', Validators.required],
      q18: ['', Validators.required],
      q19: ['', Validators.required],
      q20: ['', Validators.required],
      q21: ['', Validators.required],
      q22: ['', Validators.required],
      q23: ['', Validators.required],
      q24: ['', Validators.required],
      q25: ['', Validators.required],
      q26: ['', Validators.required],
      q27: ['', Validators.required],
      q28: ['', Validators.required],
      q29: ['', Validators.required],
      q30: ['', Validators.required],
      q31: ['', Validators.required],
      q32: ['', Validators.required],
      q33: ['', Validators.required],
      q34: ['', Validators.required],
      q35: ['', Validators.required],
      q36: ['', Validators.required],
      q37: ['', Validators.required],
      q38: ['', Validators.required],
      q39: ['', Validators.required],
      q40: ['', Validators.required],
      q41: ['', Validators.required],
      q42: ['', Validators.required],
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
    // if (this.form)
    // {
    //   this.form.patchValue({
    //     answer2:event
    //   });
    // }

    // if(event == 'true'){
    //   this.form.get('answer3')?.addValidators(Validators.required);               
    //   this.form.get('answer3')?.updateValueAndValidity();              
    //   this.form.get('answer4')?.addValidators(Validators.required);     
    //   this.form.get('answer4')?.updateValueAndValidity();              
    //   this.form.get('answer5')?.addValidators(Validators.required);           
    //   this.form.get('answer5')?.updateValueAndValidity();                    
    //   this.form.get('answer6')?.addValidators(Validators.required);           
    //   this.form.get('answer6')?.updateValueAndValidity();                    
    //   this.form.get('answer7')?.addValidators(Validators.required);          
    //   this.form.get('answer7')?.updateValueAndValidity();                     
    // } else {                
    //   this.form.get('answer3')?.clearValidators();        
    //   this.form.get('answer3')?.updateValueAndValidity();              
    //   this.form.get('answer4')?.clearValidators();             
    //   this.form.get('answer4')?.updateValueAndValidity();            
    //   this.form.get('answer5')?.clearValidators();             
    //   this.form.get('answer5')?.updateValueAndValidity();            
    //   this.form.get('answer6')?.clearValidators();              
    //   this.form.get('answer6')?.updateValueAndValidity();           
    //   this.form.get('answer7')?.clearValidators();               
    //   this.form.get('answer7')?.updateValueAndValidity();          
    // }
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
