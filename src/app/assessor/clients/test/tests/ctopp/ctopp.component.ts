
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Assessor } from 'src/app/models/assessor.model';
import { CToppComposite } from 'src/app/models/common/ctopp-composite';
import { CTOPPSubTest } from 'src/app/models/common/ctopp-subtest';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface CTopp 
{
  elRawScore :string
  elScaleScore :string
  elPercentageRank :string

  bwRawScore :string
  bwScaleScore :string
  bwPercentageRank :string

  plRawScore :string
  plScaleScore :string
  plPercentageRank :string

  mdRawScore :string
  mdScaleScore :string
  mdPercentageRank :string

  nrRawScore :string
  nrScaleScore :string
  nrPercentageRank :string

  rdRawScore :string
  rdScaleScore :string
  rdPercentageRank :string

  rlRawScore :string
  rlScaleScore :string
  rlPercentageRank :string

  bnRawScore :string
  bnScaleScore :string
  bnPercentageRank :string

  snRawScore :string
  snScaleScore :string
  snPercentageRank :string

  selected : string
  hidden : boolean

  paSum :string
  pmSum :string
  rsnSum :string
  apaSum :string

  pAScore  : number
  pACI: string;
  pADesc: string;
  pARank: string;
    
  pMScore  : number
  pMCI: string;
  pMDesc: string;
  pMRank: string;
    
  rSNScore  : number
  rSNCI: string;
  rSNDesc: string;
  rSNRank: string;
    
  aPAScore  : number
  aPACI: string;
  aPADesc: string;
  aPARank: string;

}

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

    this.LoadClientArt(this.clientId);
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
  
  onSave(){
    const body = {

      elRawScore : this.elRawScore,
      elScaleScore : this.elScaleScore,
      elPercentageRank : this.elPercentageRank,

      bwRawScore : this.bwRawScore,
      bwScaleScore : this.bwScaleScore,
      bwPercentageRank : this.bwPercentageRank,

      plRawScore : this.plRawScore,
      plScaleScore : this.plScaleScore,
      plPercentageRank : this.plPercentageRank,

      mdRawScore : this.mdRawScore,
      mdScaleScore : this.mdScaleScore,
      mdPercentageRank : this.mdPercentageRank,

      nrRawScore : this.nrRawScore,
      nrScaleScore : this.nrScaleScore,
      nrPercentageRank : this.nrPercentageRank,

      rdRawScore : this.rdRawScore,
      rdScaleScore : this.rdScaleScore,
      rdPercentageRank : this.rdPercentageRank,

      rlRawScore : this.rlRawScore,
      rlScaleScore : this.rlScaleScore,
      rlPercentageRank : this.rlPercentageRank,

      bnRawScore : this.bnRawScore,
      bnScaleScore : this.bnScaleScore,
      bnPercentageRank : this.bnPercentageRank,

      snRawScore : this.snRawScore,
      snScaleScore : this.snScaleScore,
      snPercentageRank : this.snPercentageRank,

      selected : this.selected,

      paSum : this.paSum,
      pmSum : this.pmSum,
      rsnSum : this.rsnSum,
      apaSum : this.apaSum,

      pAScore : this.pAScore,
      pACI : this.pACI,
      pADesc : this.pADesc,
      pARank : this.pARank,
        
      pMScore : this.pMScore,
      pMCI : this.pMCI,
      pMDesc : this.pMDesc,
      pMRank : this.pMRank,
        
      rSNScore : this.rSNScore,
      rSNCI : this.rSNCI,
      rSNDesc : this.rSNDesc,
      rSNRank : this.rSNRank,
        
      aPAScore : this.aPAScore,
      aPACI : this.aPACI,
      aPADesc : this.aPADesc,
      aPARank : this.aPARank,
      
      clientId : this.clientId
    };

    this.http.post<CTopp>(this.baseUrl + 'client/ctopp', 
    body
    , this.setHeader()).subscribe({
      next: (x) =>{
        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  
  LoadClientArt(clientId : string)
  {
    this.http.get<CTopp>(this.baseUrl + 'client/ctopp/'+ clientId + '', 
    this.setHeader()).subscribe({
      next: (x) =>{

        this.elRawScore = x.elRawScore,
        this.elScaleScore = x.elScaleScore,
        this.elPercentageRank = x.elPercentageRank,

        this.bwRawScore = x.bwRawScore,
        this.bwScaleScore = x.bwScaleScore,
        this.bwPercentageRank = x.bwPercentageRank,

        this.plRawScore = x.plRawScore,
        this.plScaleScore = x.plScaleScore,
        this.plPercentageRank = x.plPercentageRank,

        this.mdRawScore = x.mdRawScore,
        this.mdScaleScore = x.mdScaleScore,
        this.mdPercentageRank = x.mdPercentageRank,

        this.nrRawScore = x.nrRawScore,
        this.nrScaleScore = x.nrScaleScore,
        this.nrPercentageRank = x.nrPercentageRank,

        this.rdRawScore = x.rdRawScore,
        this.rdScaleScore = x.rdScaleScore,
        this.rdPercentageRank = x.rdPercentageRank,

        this.rlRawScore = x.rlRawScore,
        this.rlScaleScore = x.rlScaleScore,
        this.rlPercentageRank = x.rlPercentageRank,

        this.bnRawScore = x.bnRawScore,
        this.bnScaleScore = x.bnScaleScore,
        this.bnPercentageRank = x.bnPercentageRank,

        this.snRawScore = x.snRawScore,
        this.snScaleScore = x.snScaleScore,
        this.snPercentageRank = x.snPercentageRank,

        this.selected = x.selected,

        this.paSum = x.paSum,
        this.pmSum = x.pmSum,
        this.rsnSum = x.rsnSum,
        this.apaSum = x.apaSum,

        this.pAScore = x.pAScore,
        this.pACI = x.pACI,
        this.pADesc = x.pADesc,
        this.pARank = x.pARank,
          
        this.pMScore = x.pMScore,
        this.pMCI = x.pMCI,
        this.pMDesc = x.pMDesc,
        this.pMRank = x.pMRank,
          
        this.rSNScore = x.rSNScore,
        this.rSNCI = x.rSNCI,
        this.rSNDesc = x.rSNDesc,
        this.rSNRank = x.rSNRank,
          
        this.aPAScore = x.aPAScore,
        this.aPACI = x.aPACI,
        this.aPADesc = x.aPADesc,
        this.aPARank = x.aPARank,
        
        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }


}
