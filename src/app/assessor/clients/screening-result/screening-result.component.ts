import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';

@Component({
  selector: 'app-screening-result',
  templateUrl: './screening-result.component.html',
  styleUrls: ['./screening-result.component.scss']
})
export class ScreeningResultComponent implements OnInit {

  isLinear = false;
  constructor(public dialogRef: MatDialogRef<ScreeningResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto) { }

  ngOnInit(): void {
  }

}
