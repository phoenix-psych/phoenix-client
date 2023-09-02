import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessor',
  templateUrl: './assessor.component.html',
  styleUrls: ['./assessor.component.scss']
})
export class AssessorComponent implements OnInit {

  opened=false;
  constructor() { }

  ngOnInit(): void {
  }

}
