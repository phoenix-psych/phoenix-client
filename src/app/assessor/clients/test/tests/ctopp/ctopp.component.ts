
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Assessor } from 'src/app/models/assessor.model';
import { CToppComposite } from 'src/app/models/common/ctopp-composite';
import { CTOPPSubTest } from 'src/app/models/common/ctopp-subtest';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-ctopp',
  templateUrl: './ctopp.component.html',
  styleUrls: ['./ctopp.component.scss']
})
export class CtoppComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup

  elRawScore !:string
  elScaleScore !:string
  elPercentageRank :string = '0'

  bwRawScore !:string
  bwScaleScore !:string
  bwPercentageRank :string = '0'

  plRawScore !:string
  plScaleScore !:string
  plPercentageRank :string = '0'

  mdRawScore !:string
  mdScaleScore !:string
  mdPercentageRank :string = '0'

  nrRawScore !:string
  nrScaleScore !:string
  nrPercentageRank :string = '0'

  rdRawScore !:string
  rdScaleScore !:string
  rdPercentageRank :string = '0'

  rlRawScore !:string
  rlScaleScore !:string
  rlPercentageRank :string = '0'

  bnRawScore !:string
  bnScaleScore !:string
  bnPercentageRank :string = '0'

  snRawScore !:string
  snScaleScore !:string
  snPercentageRank :string = '0'
  confidenceIntervals: Array<any> = [
    { Name:"68% level of confidence",Value:"1" },
    { Name:"85% level of confidence",Value:"1.44" },
    { Name:"90% level of confidence",Value:"1.65" },
    { Name:"95% level of confidence",Value:"1.96" },
    { Name:"99% level of confidence",Value:"2.58" }
  ];
  selected : string = ''
  hidden : boolean = true

  paSum !:string
  pmSum !:string
  rsnSum !:string
  apaSum !:string

  pAScore!: number;
  pACI!: string;
  pADesc!: string;
  pARank!: string;
    
  pMScore!: number;
  pMCI!: string;
  pMDesc!: string;
  pMRank!: string;
    
  rSNScore!: number;
  rSNCI!: string;
  rSNDesc!: string;
  rSNRank!: string;
    
  aPAScore!: number;
  aPACI!: string;
  aPADesc!: string;
  aPARank!: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      ageYear: [''],
      ageMonth: [''],
    });
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

  getELRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=EL&score='+ this.elRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.elScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.elPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('EL RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  getBWRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=BW&score='+ this.bwRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.bwScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.bwPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('BW RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getPLRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=PI&score='+ this.plRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.plScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.plPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('PI RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getMDRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=MD&score='+ this.mdRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.mdScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.mdPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('MD RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getNRRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=NR&score='+ this.nrRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.nrScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.nrPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('NR RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getRDRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=RD&score='+ this.rdRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.rdScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.rdPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('RD RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getRLRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=RL&score='+ this.rlRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.rlScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.rlPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('RL RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getBNRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=BN&score='+ this.bnRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.bnScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.bnPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('BN RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  getSNRawScore(){
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    this.http.get<CTOPPSubTest>(this.baseUrl + 'assessor/misc?type=SN&score='+ this.snRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
      next: (x) =>{
        if(x.scaleScore){
          this.snScaleScore = x.scaleScore.toString();
        }

        if(x.percentageRank){
          this.snPercentageRank = x.percentageRank
        }

        this.setScore();
        this.notificationService.success('SN RawScore Updated Successfully');
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

  }

  sum(v1 : string, v2 : string, v3 : string= '0',v4 : string = '0'){
    if(Number.isNaN(v1) || v1 == undefined)
      v1 = '0';
    if(Number.isNaN(v2) || v2 == undefined)
      v2 = '0';
    if(Number.isNaN(v3) || v3 == undefined)
      v3 = '0';
    if(Number.isNaN(v4) || v4 == undefined)
      v4 = '0';
    return Math.floor(Number(v1) + Number(v2)+ Number(v3)+ Number(v4));
  }

  getMedian(no : string, div : number){
    return Math.floor(Number(no) / div);
  }

  onSelectionchanged() {
    this.hidden = false;
    this.http.get<CToppComposite>(this.baseUrl + 'assessor/misc/cmp?ci='+ this.selected + '&paSum='+ this.paSum + '&pmSum='+ this.pmSum + '&rsnSum='+ this.rsnSum + '&apaSum='+ this.apaSum + '', this.setHeader()).subscribe({
      next: (x) =>{

        this.pAScore = x.paScore;
        this.pACI = x.paci;
        this.pADesc = x.paDesc;
        this.pARank = x.paRank;
          
        this.pMScore = x.pmScore;
        this.pMCI = x.pmci;
        this.pMDesc = x.pmDesc;
        this.pMRank = x.pmRank;
          
        this.rSNScore = x.rsnScore;
        this.rSNCI = x.rsnci;
        this.rSNDesc = x.rsnDesc;
        this.rSNRank = x.rsnRank;
          
        this.aPAScore = x.apaScore;
        this.aPACI = x.apaci;
        this.aPADesc = x.apaDesc;
        this.aPARank = x.apaRank;

        this.notificationService.success(`Confidence Interval( ${this.selected} ) Populated Successfully`);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });

    // alert(this.selected);
  }

  getStandardScore(score : string){
    return Math.floor(Number(score) * 5 + 50);
  }

  CheckNAN(x : any){
    if(x == undefined || Number.isNaN(x))
    {
      return '';
    }

    return x.toString();
  }

  setScore(){
    this.paSum = this.CheckNAN(this.sum(this.elScaleScore,this.bwScaleScore,this.plScaleScore))
    this.pmSum = this.CheckNAN(this.sum(this.mdScaleScore,this.nrScaleScore));
    this.rsnSum = this.CheckNAN(this.sum(this.rdScaleScore,this.rlScaleScore));
    this.apaSum = this.CheckNAN(this.sum(this.bnScaleScore,this.snScaleScore));

    if(this.selected != '')
    {
      this.onSelectionchanged();
    }
  }

}
