import { Component, OnInit } from '@angular/core';
import { ControlBase } from '../models/control-base';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  opened=true;
  constructor() { }

  ngOnInit() {

  }

  logout(){
    localStorage.clear();
  }
}
