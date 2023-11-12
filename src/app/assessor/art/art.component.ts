import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  second = 0;
  isRunning : boolean = false
  timer1Change(){
    this.isRunning = !this.isRunning;
    if(this.isRunning == true){
      this.second = 0;
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      ageYear: [''],
      ageMonth: [''],
    });

    timer(0, 1000).subscribe(() => {
      if(this.isRunning) {
        this.second++;
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
