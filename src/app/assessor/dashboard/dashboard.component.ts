import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';

interface SummaryDto {
  clients: string;
  completedScreeners: string;
  tests: string;
  testFinished: string;
  reportPending: string;
  reportCompleted: string;
  paymentPending: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  summary !: SummaryDto;
  private baseUrl:string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<SummaryDto>(`${this.baseUrl}assessor/summary`).subscribe(
        x => {
        if(x)
        {
          this.summary = x;
        }
      });
  }
}
