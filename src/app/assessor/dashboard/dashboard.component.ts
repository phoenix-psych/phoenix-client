import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dailySalesDataSource = new MatTableDataSource<SalesData>([
    { date: '2023-09-23', sales: 100 },
    { date: '2023-09-24', sales: 200 },
    { date: '2023-09-25', sales: 300 }
  ]);

  topProducts = ['Product 1', 'Product 2', 'Product 3'];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void { }
}

interface SalesData {
  date: string;
  sales: number;
}