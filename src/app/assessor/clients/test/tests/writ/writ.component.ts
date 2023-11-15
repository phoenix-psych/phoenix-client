
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WritIQ } from 'src/app/models/common/writ-iq';
import { WritSubTest } from 'src/app/models/common/writ-subtest';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-writ',
  templateUrl: './writ.component.html',
  styleUrls: ['./writ.component.scss']
})
export class WritComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  form!:FormGroup;
  selected : string = ''
  hidden : boolean = true

  vaRawScore : string = ''
  vaStandardScore : string = ''
  vaPercentile : string = ''

  vcRawScore : string = ''
  vcStandardScore : string = ''
  vcPercentile : string = ''
  vaSum : string = ''
  
  maRawScore : string = ''
  maStandardScore : string = ''
  maPercentile : string = ''

  diRawScore : string = ''
  diStandardScore : string = ''
  diPercentile : string = ''
  dSum : string = ''

  vbSumScore : string = ''
  vbIQ : string = ''
  vbPer : string = ''
  vbCI : string = ''
  
  viSumScore : string = ''
  viIQ : string = ''
  viPer : string = ''
  viCI : string = ''
  
  iqSumScore : string = ''
  iqIQ : string = ''
  iqPer : string = ''
  iqCI : string = ''
  

  confidenceIntervals: Array<any> = [
    { Name:"90",Value:90 },
    { Name:"95",Value:95 }
  ];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) { }

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
  onSelectionchanged() {
    this.hidden = false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      ageYear: [''],
      ageMonth: [''],
    });
  }

  Generate(hide : boolean = true){
    this.hidden = hide;
    this.vaSum = (Number(this.vaStandardScore) + Number(this.vcStandardScore)).toString();
    this.dSum = (Number(this.maStandardScore) + Number(this.diStandardScore)).toString();
    this.vbSumScore = this.vaSum;
    this.viSumScore = this.dSum;
    this.iqSumScore = (Number(this.vaSum) + Number(this.dSum)).toString();
    this.getSumScore('verbal');
    this.getSumScore('visual');
    this.getSumScore('general');
  }

  getRawScore(type : string) {
    if(type == 'va')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<WritSubTest>(this.baseUrl + 'assessor/writ?type='+ type +'&score='+ this.vaRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.standardScore){
            this.vaStandardScore = x.standardScore.toString();
          }

          if(x.percentage){
            this.vaPercentile = x.percentage
          }

          this.Generate();
          this.notificationService.success('va RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    
    if(type == 'vc')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<WritSubTest>(this.baseUrl + 'assessor/writ?type='+ type +'&score='+ this.vcRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.standardScore){
            this.vcStandardScore = x.standardScore.toString();
          }

          if(x.percentage){
            this.vcPercentile = x.percentage
          }

          this.Generate();
          this.notificationService.success('vc RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    
    if(type == 'ma')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<WritSubTest>(this.baseUrl + 'assessor/writ?type='+ type +'&score='+ this.maRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.standardScore){
            this.maStandardScore = x.standardScore.toString();
          }

          if(x.percentage){
            this.maPercentile = x.percentage
          }

          this.Generate();
          this.notificationService.success('ma RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    
    if(type == 'di')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<WritSubTest>(this.baseUrl + 'assessor/writ?type='+ type +'&score='+ this.diRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.standardScore){
            this.diStandardScore = x.standardScore.toString();
          }

          if(x.percentage){
            this.diPercentile = x.percentage
          }

          this.Generate();
          this.notificationService.success('di RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    
  }

  getSumScore(type : string) {
    if(type == 'verbal')
    {
      this.http.get<WritIQ>(this.baseUrl + 'assessor/writ/iq?type='+ type +'&score='+ this.vbSumScore +'&ci='+ this.selected + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.iq){
            this.vbIQ = x.iq;
          }

          if(x.percentage){
            this.vbPer = x.percentage
          }

          if(x.ci){
            this.vbCI = x.ci
          }

          this.notificationService.success('verbal Score Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    
    if(type == 'visual')
    {
      this.http.get<WritIQ>(this.baseUrl + 'assessor/writ/iq?type='+ type +'&score='+ this.viSumScore +'&ci='+ this.selected + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.iq){
            this.viIQ = x.iq;
          }

          if(x.percentage){
            this.viPer = x.percentage
          }

          if(x.ci){
            this.viCI = x.ci
          }

          this.notificationService.success('visual Score Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }

    if(type == 'general')
    {
      this.http.get<WritIQ>(this.baseUrl + 'assessor/writ/iq?type='+ type +'&score='+ this.iqSumScore +'&ci='+ this.selected + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.iq){
            this.iqIQ = x.iq;
          }

          if(x.percentage){
            this.iqPer = x.percentage
          }

          if(x.ci){
            this.iqCI = x.ci
          }

          this.notificationService.success('general Score Updated Successfully');
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

}

