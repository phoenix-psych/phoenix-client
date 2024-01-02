
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WratTest } from 'src/app/models/common/wrat-score';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Wrat 
{
  selected : string;
  wrRawScore : string;
  wrStandardScore : string;
  wrCI : string;
  wrPer : string;
  wrGrade : string;
  spRawScore : string;
  spStandardScore : string;
  spCI : string;
  spPer : string;
  spGrade : string;
  mcRawScore : string;
  mcStandardScore : string;
  mcCI : string;
  mcPer : string;
  mcGrade : string;
  scRawScore : string;
  scStandardScore : string;
  scCI : string;
  scPer : string;
  scGrade : string;
  rcRawScore : string;
  rcStandardScore : string;
  rcCI : string;
  rcPer : string;
  rcGrade : string;
}

@Component({
  selector: 'app-wrat',
  templateUrl: './wrat.component.html',
  styleUrls: ['./wrat.component.scss']
})
export class WratComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  form!:FormGroup;
  
  selected : string = ''
  hidden : boolean = true;

  rows: number = 5;
  cols: number = 100;
  arr: string[][] = [];
  arr2: string[] = [
    'Word Reading',
    'Spelling',
    'Math Computation',
    'Sentence Comprehension',
    'Reading Composite'
  ];

  confidenceIntervals: Array<any> = [
    { Name:"90",Value:0.90 },
    { Name:"95",Value:0.95 }
  ];

  wrRawScore : string = ''
  wrStandardScore : string = ''
  wrCI : string = ''
  wrPer : string = ''
  wrGrade : string = ''

  spRawScore : string = ''
  spStandardScore : string = ''
  spCI : string = ''
  spPer : string = ''
  spGrade : string = ''

  mcRawScore : string = ''
  mcStandardScore : string = ''
  mcCI : string = ''
  mcPer : string = ''
  mcGrade : string = ''

  scRawScore : string = ''
  scStandardScore : string = ''
  scCI : string = ''
  scPer : string = ''
  scGrade : string = ''

  rcRawScore : string = ''
  rcStandardScore : string = ''
  rcCI : string = ''
  rcPer : string = ''
  rcGrade : string = ''


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) 
  {
    for (let i = 0; i < this.rows; i++) {
      this.arr[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.arr[i][j] = '';
      }
    }

    // this.arr[1][23] = 'red';
    // this.arr[1][45] = 'red';
    // this.arr[2][67] = 'red';
    // this.arr[3][89] = 'red';
    // this.arr[3][54] = 'red';
    // this.arr[4][13] = 'red';
    // this.arr[3][32] = 'red';
    // this.arr[2][99] = 'red';

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
    this.form.patchValue({
      ciType: this.selected
    });

    this.getScore('wr', this.wrRawScore);
    this.getScore('sp', this.spRawScore);
    this.getScore('mc', this.mcRawScore);
    this.getScore('sc', this.scRawScore);
    this.getScore('rc', this.rcRawScore);
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
      group: ['', Validators.required],
      ciType: [null, Validators.required],
    });

    this.form.patchValue({
      name: this.name,
      dob: this.dob
    });

    this.onDOBChange();
  }

  onLoad(){
    this.LoadClient(this.clientId);
  }

  Generate(hide : boolean = true){

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.arr[i][j] = '';
      }
    }

    this.hidden = hide;
    let co = this.form.get('group')?.value;

    const word1 = this.wrCI.split('-');
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if((j+48 >= Number(word1[0]) && j+48 <= Number(word1[1])) && i == 0){
          this.arr[i][j] = co;
        }
        else {
          this.arr[i][j] = this.arr[i][j] == co ? co : '';
        }
      }
    }

    const word2 = this.spCI.split('-');
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if((j+48 >= Number(word2[0]) && j+48 <= Number(word2[1])) && i == 1){
          this.arr[i][j] = co;
        }
        else{
          this.arr[i][j] = this.arr[i][j] == co ? co : '';
        }
      }
    }

    const word3 = this.mcCI.split('-');
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if((j+48 >= Number(word3[0]) && j+48 <= Number(word3[1])) && i == 2){
          this.arr[i][j] = co;
        }
        else {
          this.arr[i][j] = this.arr[i][j] == co ? co : '';
        }
      }
    }

    const word4 = this.scCI.split('-');
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if((j+48 >= Number(word4[0]) && j+48 <= Number(word4[1])) && i == 3){
          this.arr[i][j] = co;
        }
        else {
          this.arr[i][j] = this.arr[i][j] == co ? co : '';
        }
      }
    }

    const word5 = this.rcCI.split('-');
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if((j+48 >= Number(word5[0]) && j+48 <= Number(word5[1])) && i == 4){
          this.arr[i][j] = co;
        }
        else {
            this.arr[i][j] = this.arr[i][j] == co ? co : '';
        }
      }
    }
    
  }

  getScore(type : string, score : string){
    let cl = this.form.get('group')?.value;
    let year = this.form.get('ageYear')?.value;
    let month = this.form.get('ageMonth')?.value;
    let ciType = this.form.get('ciType')?.value;

    this.http.get<WratTest>(this.baseUrl + 'assessor/wrat?color=' + cl + '&type=' + type + '&score=' + score + '&year=' + year + '&month=' + month + '&ciType=' + ciType + '', this.setHeader()).subscribe({
      next: (x) =>{

        if(type == 'wr')
        {
          this.wrStandardScore = x.standardScore;
          this.wrCI = x.confidenceInterval;
          this.wrPer = x.percentage;
          this.wrGrade = x.grade;
        }
        else if(type == 'sp')
        {
          this.spStandardScore = x.standardScore;
          this.spCI = x.confidenceInterval;
          this.spPer = x.percentage;
          this.spGrade = x.grade;
        }
        else if(type == 'mc')
        {
          this.mcStandardScore = x.standardScore;
          this.mcCI = x.confidenceInterval;
          this.mcPer = x.percentage;
          this.mcGrade = x.grade;
        }
        else if(type == 'sc')
        {
          this.scStandardScore = x.standardScore;
          this.scCI = x.confidenceInterval;
          this.scPer = x.percentage;
          this.scGrade = x.grade;
        }
        else if(type == 'rc')
        {
          this.rcStandardScore = x.standardScore;
          this.rcCI = x.confidenceInterval;
          this.rcPer = x.percentage;
          this.rcGrade = x.grade;
        }
        
        this.notificationService.success(`Standard Score Populated Successfully`);
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
  
  onSave(){
    const body = {

      selected : this.selected,
      wrRawScore : this.wrRawScore,
      wrStandardScore : this.wrStandardScore,
      wrCI : this.wrCI,
      wrPer : this.wrPer,
      wrGrade : this.wrGrade,
      spRawScore : this.spRawScore,
      spStandardScore : this.spStandardScore,
      spCI : this.spCI,
      spPer : this.spPer,
      spGrade : this.spGrade,
      mcRawScore : this.mcRawScore,
      mcStandardScore : this.mcStandardScore,
      mcCI : this.mcCI,
      mcPer : this.mcPer,
      mcGrade : this.mcGrade,
      scRawScore : this.scRawScore,
      scStandardScore : this.scStandardScore,
      scCI : this.scCI,
      scPer : this.scPer,
      scGrade : this.scGrade,
      rcRawScore : this.rcRawScore,
      rcStandardScore : this.rcStandardScore,
      rcCI : this.rcCI,
      rcPer : this.rcPer,
      rcGrade : this.rcGrade,

      clientId : this.clientId
    };

    this.http.post<Wrat>(this.baseUrl + 'client/wrat', 
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


  LoadClient(clientId : string)
  {
    this.http.get<Wrat>(this.baseUrl + 'client/wrat/'+ clientId + '', 
    this.setHeader()).subscribe({
      next: (x) =>{
        
        this.selected = x.selected,
        this.wrRawScore = x.wrRawScore,
        this.wrStandardScore = x.wrStandardScore,
        this.wrCI = x.wrCI,
        this.wrPer = x.wrPer,
        this.wrGrade = x.wrGrade,
        this.spRawScore = x.spRawScore,
        this.spStandardScore = x.spStandardScore,
        this.spCI = x.spCI,
        this.spPer = x.spPer,
        this.spGrade = x.spGrade,
        this.mcRawScore = x.mcRawScore,
        this.mcStandardScore = x.mcStandardScore,
        this.mcCI = x.mcCI,
        this.mcPer = x.mcPer,
        this.mcGrade = x.mcGrade,
        this.scRawScore = x.scRawScore,
        this.scStandardScore = x.scStandardScore,
        this.scCI = x.scCI,
        this.scPer = x.scPer,
        this.scGrade = x.scGrade,
        this.rcRawScore = x.rcRawScore,
        this.rcStandardScore = x.rcStandardScore,
        this.rcCI = x.rcCI,
        this.rcPer = x.rcPer,
        this.rcGrade = x.rcGrade,

        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }


  GetDiff(no1: string, no2: string) {

    var sym = Number(no1) > Number(no2) ? '>' : '<=';
    var dif = Number(no1) > Number(no2) ? Number(no1) - Number(no2) : Number(no2) - Number(no1);

    return { symbol: sym, diff: dif };
  }
}

