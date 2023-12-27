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
    
    this.generatePDF5();
  }

  getAge() {
    this.age = this.calculateAge(this.data.dob);
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  generatePDF3(){
    const data = this.invoiceElement.nativeElement;
    html2canvas(data).then((canvas:any) => {

      const doc = new jsPDF('p', 'mm', 'a4');

      // const imgWidth = 208;
      // const pageHeight = 295;

      const imgWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const imgHeight = Math.ceil((canvas.height * imgWidth) / canvas.width);
      console.log(`imgHeight - ${imgHeight}`);
      let heightLeft = imgHeight;
      let position = 0;
      let pageNo = 0;
      heightLeft -= pageHeight;
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

  generatePDF5() {
    const pages = document.querySelectorAll('.page');
    const pdf = new jsPDF('p', 'mm', 'a4');
  
    function generatePage(index:number) {
      if (index < pages.length) {
        const page = pages[index] as HTMLElement;
  
        // Use html2canvas to capture the HTML content as an image
        html2canvas(page).then(canvas => {
          const imageData = canvas.toDataURL('image/png');
  
          // Add a new page to the PDF
          if (index > 0) {
            pdf.addPage();
          }
  
          // Add the captured image to the PDF
          pdf.addImage(imageData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  
          // Move to the next page
          generatePage(index + 1);
        });
      } else {
        // Save or display the PDF
        pdf.save('page-wise-pdf.pdf');
      }
    }
  
    // Start generating PDF from the first page
    generatePage(0);
  }

}

