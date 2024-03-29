import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AssessorAnswer } from 'src/app/models/assessor-answer.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Page3
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
}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-page3-result',
  templateUrl: './page3-result.component.html',
  styleUrls: ['./page3-result.component.scss']
})
export class Page3ResultComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup;
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
    });

  }

  // multi select 
  task1: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  };

  task2: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task3: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task4: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task5: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task6: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task7: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task8: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task9: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task10: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task11: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task12: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task13: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task14: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task15: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task16: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task17: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 
  task18: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Never ', completed: false, color: 'accent'},
      {name: 'Rarely  ', completed: false, color: 'accent'},
      {name: 'Sometimes  ', completed: false, color: 'accent'},
      {name: 'Often  ', completed: false, color: 'accent'},
      {name: 'Always   ', completed: false, color: 'accent'},
    ],
  }; 

  ngOnInit() {

    this.http.get<Page3>(this.baseUrl + 'individual/'+ this.clientId +'/page3', this.setHeader()).subscribe({
      next: (x) =>{
        if(x)
        {
          this.form = this.formBuilder.group(x);
          
          let q1  = this.form.get('q1')?.value;
          var splitted = q1.split(","); 
          if (this.task1.subtasks != null) {
            this.task1.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q2  = this.form.get('q2')?.value;
          var splitted = q2.split(","); 
          if (this.task2.subtasks != null) {
            this.task2.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q3  = this.form.get('q3')?.value;
          var splitted = q3.split(","); 
          if (this.task3.subtasks != null) {
            this.task3.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q4  = this.form.get('q4')?.value;
          var splitted = q4.split(","); 
          if (this.task4.subtasks != null) {
            this.task4.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q5  = this.form.get('q5')?.value;
          var splitted = q5.split(","); 
          if (this.task5.subtasks != null) {
            this.task5.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q6  = this.form.get('q6')?.value;
          var splitted = q6.split(","); 
          if (this.task6.subtasks != null) {
            this.task6.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q7  = this.form.get('q7')?.value;
          var splitted = q7.split(","); 
          if (this.task7.subtasks != null) {
            this.task7.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q8  = this.form.get('q8')?.value;
          var splitted = q8.split(","); 
          if (this.task8.subtasks != null) {
            this.task8.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q9  = this.form.get('q9')?.value;
          var splitted = q9.split(","); 
          if (this.task9.subtasks != null) {
            this.task9.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q10  = this.form.get('q10')?.value;
          var splitted = q10.split(","); 
          if (this.task10.subtasks != null) {
            this.task10.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q11  = this.form.get('q11')?.value;
          var splitted = q11.split(","); 
          if (this.task11.subtasks != null) {
            this.task11.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q12  = this.form.get('q12')?.value;
          var splitted = q12.split(","); 
          if (this.task12.subtasks != null) {
            this.task12.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q13  = this.form.get('q13')?.value;
          var splitted = q13.split(","); 
          if (this.task13.subtasks != null) {
            this.task13.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q14  = this.form.get('q14')?.value;
          var splitted = q14.split(","); 
          if (this.task14.subtasks != null) {
            this.task14.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q15  = this.form.get('q15')?.value;
          var splitted = q15.split(","); 
          if (this.task15.subtasks != null) {
            this.task15.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q16  = this.form.get('q16')?.value;
          var splitted = q16.split(","); 
          if (this.task16.subtasks != null) {
            this.task16.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q17  = this.form.get('q17')?.value;
          var splitted = q17.split(","); 
          if (this.task17.subtasks != null) {
            this.task17.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
          }

          let q18  = this.form.get('q18')?.value;
          var splitted = q18.split(","); 
          if (this.task18.subtasks != null) {
            this.task18.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
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


