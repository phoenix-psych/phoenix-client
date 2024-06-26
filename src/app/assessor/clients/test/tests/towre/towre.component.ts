
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TowreTest } from 'src/app/models/common/towre-test';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Towre 
{
  selected : string
  sweRawScore: string;
  sweAgeEqui: string;
  sweGradeEqui: string;
  sweRank: string;
  sweScale: string;
  sweDesc: string;
  pdeRawScore: string;
  pdeAgeEqui: string;
  pdeGradeEqui: string;
  pdeRank: string;
  pdeScale: string;
  pdeDesc: string;
  pdeSum: string;
  descriptiveTerm: string;
  towreScaleScore : string;
}

@Component({
  selector: 'app-towre',
  templateUrl: './towre.component.html',
  styleUrls: ['./towre.component.scss']
})
export class TowreComponent implements OnInit {

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

  sweRawScore: string = ''
  sweAgeEqui: string = ''
  sweGradeEqui: string = ''
  sweRank: string = ''
  sweScale: string = ''
  sweDesc: string = ''

  pdeRawScore: string = ''
  pdeAgeEqui: string = ''
  pdeGradeEqui: string = ''
  pdeRank: string = ''
  pdeScale: string = ''
  pdeDesc: string = ''

  twreScale: string = ''

  pdeSum: string = ''

  descriptiveTerm: string = ''
  descriptiveTerms: Array<any> = [
    { Name:"Very Poor",From:"1",To:"69" },
    { Name:"Poor",From:"70",To:"79"},
    { Name:"Below Average",From:"80",To:"89"},
    { Name:"Average",From:"90",To:"110"},
    { Name:"Above Average",From:"111",To:"120" },
    { Name:"Superior",From:"121",To:"130" },
    { Name:"Very Superior",From:"131",To:"999"}
  ];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) { }

  getScore(type : string){

    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;

    if(type == 'swe')
    {
      this.http.get<TowreTest>(this.baseUrl + 'assessor/towre?type='+ type +'&score='+ this.sweRawScore + '&year='+ year + '&month='+ month+ '&pwe='+ this.pdeScale+ '&swe='+ this.sweScale + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.ageEqui){
            this.sweAgeEqui = x.ageEqui.toString();
          }
          if(x.gradeEqui){
            this.sweGradeEqui = x.gradeEqui.toString();
          }
          if(x.percentageRank){
            this.sweRank = x.percentageRank.toString();
          }
          if(x.scale){
            this.sweScale = x.scale.toString();
          }
          if(x.descriptive){
            this.sweDesc = x.descriptive.toString();
          }

          if(x.towreScore){
            this.twreScale = x.towreScore;
          }

          this.pdeSum = (Number(this.pdeScale) + Number(this.sweScale)).toString();
          this.notificationService.success('swe RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'pde')
    {
      this.http.get<TowreTest>(this.baseUrl + 'assessor/towre?type='+ type +'&score='+ this.pdeRawScore + '&year='+ year + '&month='+ month + '&pwe='+ this.pdeScale+ '&swe='+ this.sweScale + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.ageEqui){
            this.pdeAgeEqui = x.ageEqui.toString();
          }
          if(x.gradeEqui){
            this.pdeGradeEqui = x.gradeEqui.toString();
          }
          if(x.percentageRank){
            this.pdeRank = x.percentageRank.toString();
          }
          if(x.scale){
            this.pdeScale = x.scale.toString();
          }
          if(x.descriptive){
            this.pdeDesc = x.descriptive.toString();
          }
          
          if(x.towreScore){
            this.twreScale = x.towreScore;
          }

          this.pdeSum = (Number(this.pdeScale) + Number(this.sweScale)).toString();
          this.notificationService.success('pde RawScore Updated Successfully');
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
  onSelectionchanged() {
    this.hidden = false;
  }

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

    this.descriptiveTerm = this.descriptiveTerms.filter(x => Number(x.From) <= 100 &&  Number(x.To) >= 100)[0].Name;
  }

  onLoad(){
    this.LoadClient(this.clientId);
  }

  onSave(){
    const body = {

      selected : this.selected,
      sweRawScore: this.sweRawScore,
      sweAgeEqui: this.sweAgeEqui,
      sweGradeEqui: this.sweGradeEqui,
      sweRank: this.sweRank,
      sweScale: this.sweScale,
      sweDesc: this.sweDesc,
      pdeRawScore: this.pdeRawScore,
      pdeAgeEqui: this.pdeAgeEqui,
      pdeGradeEqui: this.pdeGradeEqui,
      pdeRank: this.pdeRank,
      pdeScale: this.pdeScale,
      pdeDesc: this.pdeDesc,
      pdeSum: this.pdeSum,
      descriptiveTerm: this.descriptiveTerm,
      towreScaleScore: this.twreScale.toString(),
      
      clientId : this.clientId
    };

    this.http.post<Towre>(this.baseUrl + 'client/towre', 
    body
    , this.setHeader()).subscribe({
      next: (x) =>{
        console.log(x);
        
        this.notificationService.success('TOWRE Submitted successfully');
      },
      error: (msg)=> {
        console.log(msg);
        
        this.notificationService.success('TOWRE Failed : ' + msg.toString());
      }
    });
  }


  LoadClient(clientId : string)
  {
    this.http.get<Towre>(this.baseUrl + 'client/towre/'+ clientId + '', 
    this.setHeader()).subscribe({
      next: (x) =>{
        this.selected = x.selected,
        this.sweRawScore= x.sweRawScore,
        this.sweAgeEqui= x.sweAgeEqui,
        this.sweGradeEqui= x.sweGradeEqui,
        this.sweRank= x.sweRank,
        this.sweScale= x.sweScale,
        this.sweDesc= x.sweDesc,
        this.pdeRawScore= x.pdeRawScore,
        this.pdeAgeEqui= x.pdeAgeEqui,
        this.pdeGradeEqui= x.pdeGradeEqui,
        this.pdeRank= x.pdeRank,
        this.pdeScale= x.pdeScale,
        this.pdeDesc= x.pdeDesc,
        this.pdeSum= x.pdeSum,
        this.descriptiveTerm= x.descriptiveTerm,
        this.twreScale = x.towreScaleScore,
        
        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

}

