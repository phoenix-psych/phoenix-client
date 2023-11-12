import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialogRef } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {

  @ViewChild('invoice') invoiceElement!: ElementRef;
  constructor(public dialogRef: MatDialogRef<Report1Component>) { }

  ngOnInit(): void {
  }

  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
  }

}

