
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { ArtTest } from 'src/app/models/common/art-subtest';
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

  smAccuracy:string='0';
  smCompreAloud:string='0';
  smSpeedAloud:string='0';
  smCompreSilent:string='0';
  smSpeedSilent:string='0';
  smWritingSpeed:string='0';

  smAccuracyCentile:string='0';
  smAccuracyStd:string='0';
  smCompreAloudCentile:string='0';
  smCompreAloudStd:string='0';
  smSpeedAloudCentile:string='0';
  smSpeedAloudStd:string='0';
  smCompreSilentCentile:string='0';
  smCompreSilentStd:string='0';
  smSpeedSilentCentile:string='0';
  smSpeedSilentStd:string='0';
  smWritingSpeedCentile:string='0';
  smWritingSpeedStd:string='0';

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

  Populate()
  {
    this.Generate('acc');
    this.Generate('compA');
    this.Generate('spdA');
    this.Generate('compS');
    this.Generate('spdS');
  }

  Generate(type : string){
    this.hidden = false;
    if(type == 'acc')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ this.smAccuracy + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smAccuracyCentile = x.centile;
          this.smAccuracyStd = x.standardScore;
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'compA')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ this.smCompreAloud + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smCompreAloudCentile = x.centile;
          this.smCompreAloudStd = x.standardScore;
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'spdA')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ this.smSpeedAloud + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smSpeedAloudCentile = x.centile;
          this.smSpeedAloudStd = x.standardScore;
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'compS')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ this.smCompreSilent + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smCompreSilentCentile = x.centile;
          this.smCompreSilentStd = x.standardScore;
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'spdS')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ this.smAccuracy + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smSpeedSilentCentile = x.centile;
          this.smSpeedSilentStd = x.standardScore;
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
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

  onSave(){
    
  }

  getWritingSpeedScore(){
    this.http.get<ArtTest>(this.baseUrl + 'assessor/wSpd?type=wSpd&score='+ this.smWritingSpeed + '', this.setHeader()).subscribe({
      next: (x) =>{

        this.smWritingSpeedCentile = x.centile;
        this.smWritingSpeedStd = x.standardScore;
        
        this.notificationService.success(`Standard Score Populated Successfully`);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  onAccuracyChange(){
    this.smAccuracy = (Number(this.prAcc1) + Number(this.prAcc2) + Number(this.prAcc3) + Number(this.prAcc4)).toString();
  }
  onCompreAloudChange(){
    this.smCompreAloud = (Number(this.prCom1) + Number(this.prCom2) + Number(this.prCom3) + Number(this.prCom4)).toString();
  }
  onSpeedAloudChange(){
    this.smSpeedAloud = (Number(this.prSpd1) + Number(this.prSpd2) + Number(this.prSpd3) + Number(this.prSpd4)).toString();
  }
  onCompreSilentChange(){
    this.smCompreSilent = (Number(this.prComp5) + Number(this.prComp6) + Number(this.prComp7) + Number(this.prComp8)).toString();
  }
  onSpeedSilentChange(){
    this.smSpeedSilent = (Number(this.prSpd5) + Number(this.prSpd6) + Number(this.prSpd7) + Number(this.prSpd8)).toString();
  }
  
}
