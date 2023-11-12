import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Food,Task } from 'src/app/models/assessor-utilities';
import { PersonalDetail } from 'src/app/models/personal-detail.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-verification',
  templateUrl: './personal-verification.component.html',
  styleUrls: ['./personal-verification.component.scss']
})
export class PersonalVerificationComponent implements OnInit {

  constructor() { }

  isLinear = false;

  ngOnInit() {
    
  }
}
