
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { ArtTest } from 'src/app/models/common/art-subtest';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Art {

  second1 : number;
  second2 : number;
  second3 : number;
  second4 : number;
  second5 : number;
  second6 : number;
  second7 : number;
  second8 : number;

  prErr1 : string;
  prAcc1 : string;
  prCom1 : string;
  prSpd1 : string;

  prErr2 : string;
  prAcc2 : string;
  prCom2 : string;
  prSpd2 : string;

  prErr3 : string;
  prAcc3 : string;
  prCom3 : string;
  prSpd3 : string;

  prErr4 : string;
  prAcc4 : string;
  prCom4 : string;
  prSpd4 : string;

  prComp5 : string;
  prSpd5 : string;

  prComp6 : string;
  prSpd6 : string;

  prComp7 : string;
  prSpd7 : string;

  prComp8 : string;
  prSpd8 : string;

  smAccuracy : string;
  smCompreAloud : string;
  smSpeedAloud : string;
  smCompreSilent : string;
  smSpeedSilent : string;
  smWritingSpeed : string;

  smAccuracyCentile : string;
  smAccuracyStd : string;
  smCompreAloudCentile : string;
  smCompreAloudStd : string;
  smSpeedAloudCentile : string;
  smSpeedAloudStd : string;
  smCompreSilentCentile : string;
  smCompreSilentStd : string;
  smSpeedSilentCentile : string;
  smSpeedSilentStd : string;
  smWritingSpeedCentile : string;
  smWritingSpeedStd : string;
}

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
    else{
      this.prSpd1 = Math.round(58 / (this.second1 / 60)).toString();
      this.onSpeedAloudChange()
    }
  }
  
  second2 = 0;
  isRunning2 : boolean = false
  timer2Change(){
    this.isRunning2 = !this.isRunning2;
    if(this.isRunning2 == true){
      this.second2 = 0;
    }
    else{
      this.prSpd2 = Math.round(178 / (this.second2 / 60)).toString();
      this.onSpeedAloudChange()
    }
  }

  second3 = 0;
  isRunning3 : boolean = false
  timer3Change(){
    this.isRunning3 = !this.isRunning3;
    if(this.isRunning3 == true){
      this.second3 = 0;
    }
    else{
      this.prSpd3 = Math.round(276 / (this.second3 / 60)).toString();
      this.onSpeedAloudChange()
    }
  }

  second4 = 0;
  isRunning4 : boolean = false
  timer4Change(){
    this.isRunning4 = !this.isRunning4;
    if(this.isRunning4 == true){
      this.second4 = 0;
    }
    else{
      this.prSpd4 = Math.round(502 / (this.second4 / 60)).toString();
      this.onSpeedAloudChange()
    }
  }

  second5 = 0;
  isRunning5 : boolean = false
  timer5Change(){
    this.isRunning5 = !this.isRunning5;
    if(this.isRunning5 == true){
      this.second5 = 0;
    }
    else{
      this.prSpd5 = Math.round(59 / (this.second5 / 60)).toString();
      this.onSpeedSilentChange()
    }
  }

  second6 = 0;
  isRunning6 : boolean = false
  timer6Change(){
    this.isRunning6 = !this.isRunning6;
    if(this.isRunning6 == true){
      this.second6 = 0;
    }
    else{
      this.prSpd6 = Math.round(179 / (this.second6 / 60)).toString();
      this.onSpeedSilentChange()
    }
  }

  second7 = 0;
  isRunning7 : boolean = false
  timer7Change(){
    this.isRunning7 = !this.isRunning7;
    if(this.isRunning7 == true){
      this.second7 = 0;
    }
    else{
      this.prSpd7 = Math.round(268 / (this.second7 / 60)).toString();
      this.onSpeedSilentChange()
    }
  }

  second8 = 0;
  isRunning8 : boolean = false
  timer8Change(){
    this.isRunning8 = !this.isRunning8;
    if(this.isRunning8 == true){
      this.second8 = 0;
    }
    else{
      this.prSpd8 = Math.round(506 / (this.second8 / 60)).toString();
      this.onSpeedSilentChange()
    }
  }

  onStopWatch1Change() {
    this.prSpd1 = Math.round(58 / (this.second1 / 60)).toString();
      this.onSpeedAloudChange();
  }

  onStopWatch2Change() {
    this.prSpd2 = Math.round(178 / (this.second2 / 60)).toString();
      this.onSpeedAloudChange();
  }

  onStopWatch3Change() {
    this.prSpd3 = Math.round(276 / (this.second3 / 60)).toString();
      this.onSpeedAloudChange();
  }
  onStopWatch4Change() {
    this.prSpd4 = Math.round(502 / (this.second4 / 60)).toString();
      this.onSpeedAloudChange();
  }
  onStopWatch5Change() {
    this.prSpd5 = Math.round(59 / (this.second5 / 60)).toString();
      this.onSpeedSilentChange();
  }
  onStopWatch6Change() {
    this.prSpd6 = Math.round(179 / (this.second6 / 60)).toString();
      this.onSpeedSilentChange();
  }
  onStopWatch7Change() {
    this.prSpd7 = Math.round(268 / (this.second7 / 60)).toString();
      this.onSpeedSilentChange();
  }
  onStopWatch8Change() {
    this.prSpd8 = Math.round(506 / (this.second8 / 60)).toString();
      this.onSpeedSilentChange();
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

  @Input() clientId = '';
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
    
    this.LoadClient(this.clientId);
  }

  onLoad(){
    this.LoadClient(this.clientId);
  }

  Populate()
  {
    this.Generate('acc');
    this.Generate('compA');
    this.Generate('spdA');
    this.Generate('compS');
    this.Generate('spdS');
  }

  LoadClient(clientId : string)
  {
    this.http.get<Art>(this.baseUrl + 'client/art/'+ clientId + '', 
    this.setHeader()).subscribe({
      next: (x) =>{

        this.second1 = x.second1,
        this.second2 = x.second2,
        this.second3 = x.second3,
        this.second4 = x.second4,
        this.second5 = x.second5,
        this.second6 = x.second6,
        this.second7 = x.second7,
        this.second8 = x.second8,
    
        this.prErr1= x.prErr1,
        this.prAcc1= x.prAcc1,
        this.prCom1= x.prCom1,
        this.prSpd1= x.prSpd1,

        this.prErr2= x.prErr2,
        this.prAcc2= x.prAcc2,
        this.prCom2= x.prCom2,
        this.prSpd2= x.prSpd2,

        this.prErr3= x.prErr3,
        this.prAcc3= x.prAcc3,
        this.prCom3= x.prCom3,
        this.prSpd3= x.prSpd3,

        this.prErr4= x.prErr4,
        this.prAcc4= x.prAcc4,
        this.prCom4= x.prCom4,
        this.prSpd4= x.prSpd4,

        this.prComp5= x.prComp5,
        this.prSpd5= x.prSpd5,

        this.prComp6= x.prComp6,
        this.prSpd6= x.prSpd6,

        this.prComp7= x.prComp7,
        this.prSpd7= x.prSpd7,

        this.prComp8= x.prComp8,
        this.prSpd8= x.prSpd8,

        this.smAccuracy= x.smAccuracy,
        this.smCompreAloud= x.smCompreAloud,
        this.smSpeedAloud= x.smSpeedAloud,
        this.smCompreSilent= x.smCompreSilent,
        this.smSpeedSilent= x.smSpeedSilent,
        this.smWritingSpeed= x.smWritingSpeed,

        this.smAccuracyCentile= x.smAccuracyCentile,
        this.smAccuracyStd= x.smAccuracyStd,
        this.smCompreAloudCentile= x.smCompreAloudCentile,
        this.smCompreAloudStd= x.smCompreAloudStd,
        this.smSpeedAloudCentile= x.smSpeedAloudCentile,
        this.smSpeedAloudStd= x.smSpeedAloudStd,
        this.smCompreSilentCentile= x.smCompreSilentCentile,
        this.smCompreSilentStd= x.smCompreSilentStd,
        this.smSpeedSilentCentile= x.smSpeedSilentCentile,
        this.smSpeedSilentStd= x.smSpeedSilentStd,
        this.smWritingSpeedCentile= x.smWritingSpeedCentile,
        this.smWritingSpeedStd= x.smWritingSpeedStd,

        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  Generate(type : string){
    this.hidden = false;
    if(type == 'acc')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ Number(this.smAccuracy).toString() + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smAccuracyCentile = x.centile.toString();
          this.smAccuracyStd = x.standardScore.toString();
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'compA')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ Number(this.smCompreAloud).toString() + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smCompreAloudCentile = x.centile.toString();
          this.smCompreAloudStd = x.standardScore.toString();
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'spdA')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ Number(this.smSpeedAloud).toString() + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smSpeedAloudCentile = x.centile.toString();
          this.smSpeedAloudStd = x.standardScore.toString();
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'compS')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ Number(this.smCompreSilent).toString() + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smCompreSilentCentile = x.centile.toString();
          this.smCompreSilentStd = x.standardScore.toString();
          
          this.notificationService.success(`Standard Score Populated Successfully`);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'spdS')
    {
      this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type='+ type + '&score='+ Number(this.smSpeedSilent).toString() + '', this.setHeader()).subscribe({
        next: (x) =>{
  
          this.smSpeedSilentCentile = x.centile.toString();
          this.smSpeedSilentStd = x.standardScore.toString();
          
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

  getWritingSpeedScore(){
    this.http.get<ArtTest>(this.baseUrl + 'assessor/art?type=wSpd&score='+ Number(this.smWritingSpeed).toString() + '', this.setHeader()).subscribe({
      next: (x) =>{

        this.smWritingSpeedCentile = x.centile.toString();
        this.smWritingSpeedStd = x.standardScore.toString();
        
        this.notificationService.success(`Standard Score Populated Successfully`);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  onAccuracyChange(){
    this.smAccuracy = (Number(this.prAcc1) + Number(this.prAcc2) + Number(this.prAcc3) + Number(this.prAcc4)).toFixed(2).toString();
  }
  onCompreAloudChange(){
    this.smCompreAloud = (Number(this.prCom1) + Number(this.prCom2) + Number(this.prCom3) + Number(this.prCom4)).toFixed(2).toString();
  }
  onSpeedAloudChange(){

    var count = (Number(this.prSpd1)>0 ? 1 : 0) + (Number(this.prSpd2)>0 ? 1 : 0) + (Number(this.prSpd3)>0 ? 1 : 0) + (Number(this.prSpd4)>0 ? 1 : 0)

    this.smSpeedAloud = Math.round(Number((Number(this.prSpd1) + Number(this.prSpd2) + Number(this.prSpd3) + Number(this.prSpd4)).toFixed(2))/ count).toString();
  }
  onCompreSilentChange(){
    this.smCompreSilent = (Number(this.prComp5) + Number(this.prComp6) + Number(this.prComp7) + Number(this.prComp8)).toFixed(2).toString();
  }
  onSpeedSilentChange(){

    var count = (Number(this.prSpd5)>0 ? 1 : 0) + (Number(this.prSpd6)>0 ? 1 : 0) + (Number(this.prSpd7)>0 ? 1 : 0) + (Number(this.prSpd8)>0 ? 1 : 0)

    this.smSpeedSilent = (Math.round(Number((Number(this.prSpd5) + Number(this.prSpd6) + Number(this.prSpd7) + Number(this.prSpd8)).toFixed(2))/ count)).toString();
  }
  
  onSave()
  {
    
    const body = {
      second1 : this.second1,
      second2 : this.second2,
      second3 : this.second3,
      second4 : this.second4,
      second5 : this.second5,
      second6 : this.second6,
      second7 : this.second7,
      second8 : this.second8,
    
      prErr1: this.prErr1,
      prAcc1: this.prAcc1,
      prCom1: this.prCom1,
      prSpd1: this.prSpd1,
    
      prErr2: this.prErr2,
      prAcc2: this.prAcc2,
      prCom2: this.prCom2,
      prSpd2: this.prSpd2,
    
      prErr3: this.prErr3,
      prAcc3: this.prAcc3,
      prCom3: this.prCom3,
      prSpd3: this.prSpd3,
    
      prErr4: this.prErr4,
      prAcc4: this.prAcc4,
      prCom4: this.prCom4,
      prSpd4: this.prSpd4,
    
      prComp5: this.prComp5,
      prSpd5: this.prSpd5,
    
      prComp6: this.prComp6,
      prSpd6: this.prSpd6,
    
      prComp7: this.prComp7,
      prSpd7: this.prSpd7,
    
      prComp8: this.prComp8,
      prSpd8: this.prSpd8,
    
      smAccuracy: this.smAccuracy,
      smCompreAloud: this.smCompreAloud,
      smSpeedAloud: this.smSpeedAloud,
      smCompreSilent: this.smCompreSilent,
      smSpeedSilent: this.smSpeedSilent,
      smWritingSpeed: this.smWritingSpeed,
    
      smAccuracyCentile: this.smAccuracyCentile,
      smAccuracyStd: this.smAccuracyStd,
      smCompreAloudCentile: this.smCompreAloudCentile,
      smCompreAloudStd: this.smCompreAloudStd,
      smSpeedAloudCentile: this.smSpeedAloudCentile,
      smSpeedAloudStd: this.smSpeedAloudStd,
      smCompreSilentCentile: this.smCompreSilentCentile,
      smCompreSilentStd: this.smCompreSilentStd,
      smSpeedSilentCentile: this.smSpeedSilentCentile,
      smSpeedSilentStd: this.smSpeedSilentStd,
      smWritingSpeedCentile: this.smWritingSpeedCentile,
      smWritingSpeedStd: this.smWritingSpeedStd,
      
      clientId : this.clientId
    };

    this.http.post<Art>(this.baseUrl + 'client/art', 
    body
    , this.setHeader()).subscribe({
      next: (x) =>{

        console.log(x);
        
        this.notificationService.success('ART Submitted successfully');
      },
      error: (msg)=> {
        console.log(msg);
        
        this.notificationService.success('ART Failed : ' + msg.toString());
      }
    });
  }
}
