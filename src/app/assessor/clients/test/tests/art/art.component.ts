
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  form!:FormGroup;
  confidenceIntervals: Array<any> = [
    { Name:"68% level of confidence",Value:"1" },
    { Name:"85% level of confidence",Value:"1.44" },
    { Name:"90% level of confidence",Value:"1.65" },
    { Name:"95% level of confidence",Value:"1.96" },
    { Name:"99% level of confidence",Value:"2.58" }
  ];
  selected : string = ''
  hidden : boolean = true

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) { }

  second1 = 0;
  isRunning1 : boolean = false
  timer1Change(){
    this.isRunning1 = !this.isRunning1;
    if(this.isRunning1 == true){
      this.second1 = 0;
    }
  }
  
  second2 = 0;
  isRunning2 : boolean = false
  timer2Change(){
    this.isRunning2 = !this.isRunning2;
    if(this.isRunning2 == true){
      this.second2 = 0;
    }
  }

  second3 = 0;
  isRunning3 : boolean = false
  timer3Change(){
    this.isRunning3 = !this.isRunning3;
    if(this.isRunning3 == true){
      this.second3 = 0;
    }
  }

  second4 = 0;
  isRunning4 : boolean = false
  timer4Change(){
    this.isRunning4 = !this.isRunning4;
    if(this.isRunning4 == true){
      this.second4 = 0;
    }
  }

  second5 = 0;
  isRunning5 : boolean = false
  timer5Change(){
    this.isRunning5 = !this.isRunning5;
    if(this.isRunning5 == true){
      this.second5 = 0;
    }
  }

  second6 = 0;
  isRunning6 : boolean = false
  timer6Change(){
    this.isRunning6 = !this.isRunning6;
    if(this.isRunning6 == true){
      this.second6 = 0;
    }
  }

  second7 = 0;
  isRunning7 : boolean = false
  timer7Change(){
    this.isRunning7 = !this.isRunning7;
    if(this.isRunning7 == true){
      this.second7 = 0;
    }
  }

  second8 = 0;
  isRunning8 : boolean = false
  timer8Change(){
    this.isRunning8 = !this.isRunning8;
    if(this.isRunning8 == true){
      this.second8 = 0;
    }
  }

  prErr1:string='0';
  prAcc1:string='0';
  prCom1:string='0';
  prSpd1:string='0';

  prErr2:string='0';
  prAcc2:string='0';
  prCom2:string='0';
  prSpd2:string='0';

  prErr3:string='0';
  prAcc3:string='0';
  prCom3:string='0';
  prSpd3:string='0';

  prErr4:string='0';
  prAcc4:string='0';
  prCom4:string='0';
  prSpd4:string='0';

  prComp5:string='0';
  prSpd5:string='0';

  prComp6:string='0';
  prSpd6:string='0';

  prComp7:string='0';
  prSpd7:string='0';

  prComp8:string='0';
  prSpd8:string='0';

  @Input() name = '';
  @Input() dob = new Date();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      ageYear: [''],
      ageMonth: [''],
    });

    this.form.patchValue({
      name: this.name,
      dob: this.dob
    });

    this.onDOBChange();
    timer(0, 1000).subscribe(() => {
      if(this.isRunning1) {
        this.second1++;
      }
    });
    timer(0, 1000).subscribe(() => {
      if(this.isRunning2) {
        this.second2++;
      }
    });
  
    timer(0, 1000).subscribe(() => {
      if(this.isRunning3) {
        this.second3++;
      }
    });
  
    timer(0, 1000).subscribe(() => {
      if(this.isRunning4) {
        this.second4++;
      }
    });
  
    timer(0, 1000).subscribe(() => {
      if(this.isRunning5) {
        this.second5++;
      }
    });
  
    timer(0, 1000).subscribe(() => {
      if(this.isRunning6) {
        this.second6++;
      }
    });
  
    timer(0, 1000).subscribe(() => {
      if(this.isRunning7) {
        this.second7++;
      }
    });
  
    timer(0, 1000).subscribe(() => {
      if(this.isRunning8) {
        this.second8++;
      }
    });
  
  }

  Generate(hide : boolean = true){
    this.hidden = hide;
  }

  onDOBChange() {
    if (this.form.get('dob')?.value)
    {
        let bdate = new Date(this.form.get('dob')?.value);
        let timeDiff = Math.abs(Date.now() - bdate.getTime());
        let ageYear = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        let ageMonth = Math.floor(timeDiff / (1000 * 3600 * 24) % 365.25 / 31);
        this.form.patchValue({
          ageYear: ageYear,
          ageMonth: ageMonth,
        });
    }
  }

}
