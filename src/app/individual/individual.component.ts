import { Component, OnInit } from '@angular/core';
import { ControlBase } from '../models/control-base';
import { DataService } from './data.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  meta!: ControlBase[];
  data!: any;
  constructor(private dataService : DataService) { }

  async ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.data = await this.dataService.getData();
    this.meta = await this.dataService.getMeta();
  }
}
