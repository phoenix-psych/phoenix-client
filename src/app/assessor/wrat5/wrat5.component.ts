import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wrat5',
  templateUrl: './wrat5.component.html',
  styleUrls: ['./wrat5.component.scss']
})
export class Wrat5Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  form!:FormGroup;
  
  selected : string = ''
  hidden : boolean = false;

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
    { Name:"90",Value:90 },
    { Name:"95",Value:95 }
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

    this.arr[1][23] = 'red';
    this.arr[1][45] = 'red';
    this.arr[2][67] = 'red';
    this.arr[3][89] = 'red';
    this.arr[3][54] = 'red';
    this.arr[4][13] = 'red';
    this.arr[3][32] = 'red';
    this.arr[2][99] = 'red';

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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      ageYear: [''],
      ageMonth: [''],
      group : ['']
    });
  }

  Generate(hide : boolean = true){
    this.hidden = hide;
    
  }

  getScore(type : string){

  }
}
