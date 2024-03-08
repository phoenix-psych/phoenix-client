import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})

export class Page1Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form:FormGroup
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) {

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
      q43: ['', Validators.required],
      q44: ['', Validators.required],

    });
  }

  selectedValue2!: string;
  selectedValue4!: string;
  selectedValue5!: string;
  selectedValue6!: string;

  other1!: string;
  
  other6!: string;
  other7!: string;


  // multi select 
  task1: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'ADHD', completed: false, color: 'accent'},
      {name: 'Dyslexia', completed: false, color: 'accent'},
      {name: 'Dyspraxia/Developmental Coordination Disorder', completed: false, color: 'accent'},
      {name: 'Social and Communication', completed: false, color: 'accent'},
      {name: 'Dyscalculia', completed: false, color: 'accent'},
      {name: 'Other', completed: false, color: 'accent'},
      
    ],
  };

  task2: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Yes', completed: false, color: 'accent'},
      {name: 'No', completed: false, color: 'accent'},
      {name: 'Sometimes', completed: false, color: 'accent'},
      {name: 'Other', completed: false, color: 'accent'},
      
    ],
  };

  task3: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'No(Go to Q36)', completed: false, color: 'accent'},
      {name: 'Yes', completed: false, color: 'accent'},
      {name: 'Reader', completed: false, color: 'accent'},
      {name: 'Word Processor/Laptop', completed: false, color: 'accent'},
      {name: 'Separate room', completed: false, color: 'accent'},
      {name: 'Rest Breaks', completed: false, color: 'accent'},
      {name: 'Extra time', completed: false, color: 'accent'},
      {name: 'Other', completed: false, color: 'accent'},
      
    ],
  };
  task4: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'None of these responses apply to me (Go to Next Section- Current Situation)', completed: false, color: 'accent'},
      {name: 'I had prolonged experiences of absence from school', completed: false, color: 'accent'},
      {name: 'I had an Education Health Care Plan (EHCP)', completed: false, color: 'accent'},
      {name: 'I did not attended school regularly', completed: false, color: 'accent'},
      {name: 'I changed schools more than the expected times', completed: false, color: 'accent'},
      
    ],
  };

  allComplete: boolean = false;

  ngOnInit() {
    // this.http.get<AssessorAnswer>(this.baseUrl + 'assessor/answer?page='+ 1 + '', this.setHeader()).subscribe({
    //   next: (x) =>{
    //     this.form = this.formBuilder.group(x);
    //     this.selectedValue2 = this.form.get('answer2')?.value;
    //     let answer1  = this.form.get('answer1')?.value;
    //     var splitted = answer1.split(","); 
    //     if (this.task.subtasks != null) {
    //       this.task.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
    //     }

    //     console.log(x);
    //   },
    //   error: (msg)=> {
    //     console.log(msg);
    //   }
    // });
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
    // if (this.form && this.selectedValue6)
    // {
    //   this.form.patchValue({
    //     answer6: this.selectedValue6 === "Other" ? this.other6 : this.selectedValue6
    //   });
    // }
  }

  updateTask1Node(type: string) {
    if (this.task1.subtasks == null) {
      return;
    }
    this.task1.subtasks.filter(x=>x.name == type).forEach(t => (t.completed = !t.completed));
    this.form.patchValue({
      q6: `${this.task1.subtasks?.filter(x=>x.completed == true).map(x => x.name).join(',')}:${this.other1}`
    });
  }

  updateTask2Node(type: string) {
    
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

  onSubmit() {
    if (this.form.valid) {
      // this.form.patchValue({
      // });

      this.http.post(this.baseUrl + 'individual/{studentId}/form/'+ 1 + '', this.form.value, this.setHeader()).subscribe({
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
