import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-goart',
  templateUrl: './goart.component.html',
  styleUrls: ['./goart.component.scss']
})
export class GoartComponent implements OnInit {
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
  pdeRawScore: string = ''

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

  getScore(a : string){

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
    //this.LoadClient(this.clientId);
  }

  onSave(){
    
  }


}
