import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Page4
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
}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-page4-result',
  templateUrl: './page4-result.component.html',
  styleUrls: ['./page4-result.component.scss']
})
export class Page4ResultComponent implements OnInit {

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

  }

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
  task19: Task = {
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
  task20: Task = {
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

   
  task21: Task = {
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
  task22: Task = {
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
  task23: Task = {
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
  task24: Task = {
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
  task25: Task = {
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
  task26: Task = {
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
  task27: Task = {
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
  task28: Task = {
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
  task29: Task = {
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
  task30: Task = {
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
  task31: Task = {
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
  task32: Task = {
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
  task33: Task = {
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
  task34: Task = {
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
  task35: Task = {
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
  task36: Task = {
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
  task37: Task = {
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
  task38: Task = {
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
  task39: Task = {
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
  task40: Task = {
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
  task41: Task = {
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
  task42: Task = {
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

    this.http.get<Page4>(this.baseUrl + 'individual/'+ this.clientId +'/page4', this.setHeader()).subscribe({
      next: (x) =>{
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

        let q19  = this.form.get('q19')?.value;
        var splitted = q19.split(","); 
        if (this.task19.subtasks != null) {
          this.task19.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q20  = this.form.get('q20')?.value;
        var splitted = q20.split(","); 
        if (this.task20.subtasks != null) {
          this.task20.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q21  = this.form.get('q21')?.value;
        var splitted = q21.split(","); 
        if (this.task21.subtasks != null) {
          this.task21.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q22  = this.form.get('q22')?.value;
        var splitted = q22.split(","); 
        if (this.task22.subtasks != null) {
          this.task22.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q23  = this.form.get('q23')?.value;
        var splitted = q23.split(","); 
        if (this.task23.subtasks != null) {
          this.task23.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q24  = this.form.get('q24')?.value;
        var splitted = q24.split(","); 
        if (this.task24.subtasks != null) {
          this.task24.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q25  = this.form.get('q25')?.value;
        var splitted = q25.split(","); 
        if (this.task25.subtasks != null) {
          this.task25.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q26  = this.form.get('q26')?.value;
        var splitted = q26.split(","); 
        if (this.task26.subtasks != null) {
          this.task26.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q27  = this.form.get('q27')?.value;
        var splitted = q27.split(","); 
        if (this.task27.subtasks != null) {
          this.task27.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q28  = this.form.get('q28')?.value;
        var splitted = q28.split(","); 
        if (this.task28.subtasks != null) {
          this.task28.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q29  = this.form.get('q29')?.value;
        var splitted = q29.split(","); 
        if (this.task29.subtasks != null) {
          this.task29.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q30  = this.form.get('q30')?.value;
        var splitted = q30.split(","); 
        if (this.task30.subtasks != null) {
          this.task30.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q31  = this.form.get('q31')?.value;
        var splitted = q31.split(","); 
        if (this.task31.subtasks != null) {
          this.task31.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q32  = this.form.get('q32')?.value;
        var splitted = q32.split(","); 
        if (this.task32.subtasks != null) {
          this.task32.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q33  = this.form.get('q33')?.value;
        var splitted = q33.split(","); 
        if (this.task33.subtasks != null) {
          this.task33.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q34  = this.form.get('q34')?.value;
        var splitted = q34.split(","); 
        if (this.task34.subtasks != null) {
          this.task34.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q35  = this.form.get('q35')?.value;
        var splitted = q35.split(","); 
        if (this.task35.subtasks != null) {
          this.task35.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q36  = this.form.get('q36')?.value;
        var splitted = q36.split(","); 
        if (this.task36.subtasks != null) {
          this.task36.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q37  = this.form.get('q37')?.value;
        var splitted = q37.split(","); 
        if (this.task37.subtasks != null) {
          this.task37.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q38  = this.form.get('q38')?.value;
        var splitted = q38.split(","); 
        if (this.task38.subtasks != null) {
          this.task38.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q39  = this.form.get('q39')?.value;
        var splitted = q39.split(","); 
        if (this.task39.subtasks != null) {
          this.task39.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q40  = this.form.get('q40')?.value;
        var splitted = q40.split(","); 
        if (this.task40.subtasks != null) {
          this.task40.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q41  = this.form.get('q41')?.value;
        var splitted = q41.split(","); 
        if (this.task41.subtasks != null) {
          this.task41.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        let q42  = this.form.get('q42')?.value;
        var splitted = q42.split(","); 
        if (this.task42.subtasks != null) {
          this.task42.subtasks.filter((x) => splitted.includes(x.name)).forEach(t => (t.completed = true));
        }

        console.log(x);
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

