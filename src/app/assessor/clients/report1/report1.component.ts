import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {

  myDate = new Date();
  today : string | null;
  dobStr : string | null;
  age : number = 0;

  @ViewChild('invoice') invoiceElement!: ElementRef;
  constructor(public dialogRef: MatDialogRef<Report1Component>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto,
    private datePipe: DatePipe) 
    {
      this.today = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.dobStr = this.datePipe.transform(data.dob, 'yyyy-MM-dd');
    }

  ngOnInit(): void {
    this.getAge();
  }

  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save(`${this.data.name}-report.pdf`);
    });
  }

  getAge() {
        const date: Date = this.data.dob;
        // let timeDiff = Math.abs(Date.now() - date.getTime());
        // this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

}

