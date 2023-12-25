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
    
    this.generatePDF3();
    // html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
    //   const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
    //   const fileWidth = 200;
    //   const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
    //   let PDF = new jsPDF('p', 'mm', 'a4',);
    //   PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
    //   PDF.html(this.invoiceElement.nativeElement.innerHTML)
    //   PDF.save(`${this.data.name}-report.pdf`);
    // });
  }

  getAge() {
        const date: Date = this.data.dob;
        // let timeDiff = Math.abs(Date.now() - date.getTime());
        // this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  //tiles: string[] = ['Tile 1', 'Tile 2', 'Tile 3'];

  // generatePDF1() {
  //   const pdfDoc = new jsPDF({
  //     orientation: 'l',
  //     unit: 'pt',
  //     format: [612, 792],
  //   });

  //   const margins = {
  //     top: 36,
  //     bottom: 36,
  //     left: 36,
  //     width: 720,
  //     height: 540,
  //   };

  //   const pageLength = this.invoiceElement.nativeElement.children.length;
  //   const pageCanvases = new Array(pageLength);
  //   const canvasOperations: Promise<HTMLCanvasElement>[] = [];

  //   for (let i = 0; i < pageLength; i++) {
  //     const pdfHTML = this.invoiceElement.nativeElement.children[i];
  //     canvasOperations.push(html2canvas(pdfHTML));
  //   }

  //   Promise.all(canvasOperations).then((canvases) => {
  //     canvases.forEach((canvas, idx) => {
  //       if (idx > 0) {
  //         pdfDoc.addPage();
  //       }

  //       const imgData = canvas.toDataURL('image/jpeg');
  //       pdfDoc.addImage(imgData, 'JPEG', margins.left, margins.top, margins.width, margins.height);
  //     });

  //     pdfDoc.save('file2.pdf');
  //   });
  // }

  // generatePDF2(): void {
    
  //   const pdfDoc = new jsPDF({
  //     orientation: 'l',
  //     unit: 'pt',
  //     format: [612, 792] // 72pts per inch
  //   });

  //   const margins = {
  //     top: 36,
  //     bottom: 36,
  //     left: 36,
  //     width: 720,
  //     height: 540
  //   };

  //   const pdfHTML = this.invoiceElement.nativeElement;

  //   html2canvas(pdfHTML).then((canvas) => {
  //     const img = canvas.toDataURL();
  //     pdfDoc.addImage(img, 'jpg', margins.left, margins.top, margins.width, margins.height);
  //     pdfDoc.save(`Report:${this.data.name}(${this.data.email}).pdf`);
  //   });
  // }

  generatePDF3(){
    const data = this.invoiceElement.nativeElement;
    html2canvas(data).then((canvas:any) => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      console.log(`imgHeight - ${imgHeight}`);
      let heightLeft = imgHeight;
      let position = 0;
      let pageNo = 0;
      heightLeft -= pageHeight;
      const doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
      doc.save(`Report:${this.data.name}(${this.data.email}).pdf`);
    });
  }

}

