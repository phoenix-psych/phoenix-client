import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Page1
{
  q1:string,
  q2:string,
  q3:string,
  q4:string,
  q5:string,
  q6:string,
  q7:string,
  q8:string,
  q9:string,
  q10:string,
  q11:string,
  q12:string,
  q13:string,
  q14:string,
  q15:string,
  q16:string,
  q17:string,
  q18:string,
  q19:string,
  q20:string,
  q21:string,
  q22:string,
  q23:string,
  q24:string,
  q25:string,
  q26:string,
  q27:string,
  q28:string,
  q29:string,
  q30:string,
  q31:string,
  q32:string,
  q33:string,
  q34:string,
  q35:string,
  q36:string,
  q37:string,
  q38:string,
  q39:string,
  q40:string,
  q41:string,
  q42:string,
  q43:string,
  q44: string
}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-page1-result',
  templateUrl: './page1-result.component.html',
  styleUrls: ['./page1-result.component.scss']
})
export class Page1ResultComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form:FormGroup;
  @Input() clientId = '';
  
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

  other1!: string;
  other2!: string;
  other3!: string;
  other4!: string;

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

    this.http.get<Page1>(this.baseUrl + 'individual/'+ this.clientId +'/page1', this.setHeader()).subscribe({
      next: (x) =>{
        if(x)
        {
          this.form = this.formBuilder.group(x);
          //q6
          let q6  = this.form.get('q6')?.value;
          var splitted = q6.split(","); 
          if (this.task1.subtasks != null) {
            this.task1.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
            const lastElement = splitted[splitted.length - 1];
            this.other1 = lastElement.split(':')[1];
            if(this.other1 != '')
            {
              this.task1.subtasks.filter((x) => x.name == 'Other').forEach(t => (t.completed = true));
            }
          }

          //q16
          let q16  = this.form.get('q16')?.value;
          var splitted = q16.split(","); 
          if (this.task2.subtasks != null) {
            this.task2.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
            const lastElement = splitted[splitted.length - 1];
            this.other2 = lastElement.split(':')[1];
            if(this.other2 != '')
            {
              this.task2.subtasks.filter((x) => x.name == 'Other').forEach(t => (t.completed = true));
            }
          }

          //q32
          let q32  = this.form.get('q32')?.value;
          var splitted = q32.split(","); 
          if (this.task3.subtasks != null) {
            this.task3.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
            const lastElement = splitted[splitted.length - 1];
            this.other3 = lastElement.split(':')[1];
            if(this.other3 != '')
            {
              this.task3.subtasks.filter((x) => x.name == 'Other').forEach(t => (t.completed = true));
            }
          }

          //q33
          let q33  = this.form.get('q33')?.value;
          var splitted = q33.split(","); 
          if (this.task4.subtasks != null) {
            this.task4.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          console.log(x);
        }
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
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
