import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../shared/notify.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements  OnInit {

  opened=false;
  constructor(){
  }

  ngOnInit() {
  }
}


