import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from 'src/app/models/control-base';
import { DataService } from '../data.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnChanges {
  
  @Input() meta: ControlBase[] = [];
  @Input() data: any = {};
  form!: FormGroup;
  payLoad = '';

  constructor(private dataService : DataService) {}

  ngOnChanges() {
    this.form = this.dataService.toFormGroup(this.meta, this.data);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
