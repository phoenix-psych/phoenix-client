import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
    
  docSrc1!: SafeResourceUrl;
  // @ViewChild('doc1') doc1: any; 

  // docSrc2!: SafeResourceUrl;
  // @ViewChild('doc2') doc2: any; 

  // docSrc3!: SafeResourceUrl;
  // @ViewChild('doc3') doc3: any; 

  // docSrc4!: SafeResourceUrl;
  // @ViewChild('doc4') doc4: any; 

  // docSrc5!: SafeResourceUrl;
  // @ViewChild('doc5') doc5: any; 

  // docSrc6!: SafeResourceUrl;
  // @ViewChild('doc6') doc6: any; 

  // docSrc7!: SafeResourceUrl;
  // @ViewChild('doc7') doc7: any; 

  // docSrc8!: SafeResourceUrl;
  // @ViewChild('doc8') doc8: any; 

  dialogRef !: MatDialogRef<AssessmentComponent>

  constructor(private dialog: MatDialog,
    //public dialogRef: MatDialogRef<AssessmentComponent>,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
      
  }

  getDyspraxiaScreenerForm(templateRef : any) {

    const url1 = `https://forms.office.com/pages/responsepage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUNVdLN0JCWktFRVVXRTNNVURGVkJSMzZEUC4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
    
  }

  getADHDScreenerForm(templateRef : any) {
    const url1 = `https://forms.office.com/pages/responsepage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUNU5QS0RXTUtRWDRUV0w4VUNQRzgyM1c4NS4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }

  getVisualDisturbanceForm(templateRef : any) {
    const url1 = `https://forms.office.com/pages/responsepage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUOUFDTFFDSkxZVlg4Q1BTOUpWRFI0QTJOWS4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }

  getBackgroundForm(templateRef : any) {
    const url1 = `https://forms.office.com/pages/responsepage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUNVc4REY4R09DNk1ITDIyMzRIWVpEU0I0RS4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }

  getStudentInformationForm(templateRef : any) {
    const url1 = `https://forms.office.com/pages/responsepage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUM01ETlNYTzFSMDRGTFhQVlBNNlRYNlVMVi4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }

  getDataConsentForm(templateRef : any) {
    const url1 = `https://forms.office.com/pages/responsepage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNURTFVOUNVSFhVOFhBRVdHWUZRTFFLQzkzUC4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }

  getAvailabilityForm(templateRef : any) {
      const url1 = `https://forms.office.com/Pages/ResponsePage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUQ0hLRlEzVzlNNkRFQkQ0MzFDMUU0OFRPQy4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }
  
  OnClick() {
  throw new Error('Method not implemented.');
  }
}
