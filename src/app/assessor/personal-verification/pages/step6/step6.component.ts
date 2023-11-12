import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) {
  }

  selectedValue!: string;
  selectedValueConvictionGp!: string;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: [''],
      answer4: [''],
      answer5: [''],
      answer6: [''],
      answer7: [''],
    });

  }

}
