



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClientDocument } from 'src/app/models/utility/document.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  docSrc1!: SafeResourceUrl;
  dialogRef !: MatDialogRef<Page5Component>
  docs !: ClientDocument[];
  selectedDoc !: ClientDocument;
  myfile!: File

  //fileName = 'Select File';
  private baseUrl:string = environment.baseApiUrl 

  constructor(private http: HttpClient,
    private dialog: MatDialog,
              private sanitizer: DomSanitizer) {
    
  }

  selectGrocery(doc: ClientDocument) {
    this.selectedDoc = doc;
  }

  trackByGrocery = (index: number, doc: ClientDocument): string =>
    doc.id;

    selectFile(event: any, doc: ClientDocument): void {
      if (event.target.files && event.target.files[0]) {
        const file: File = event.target.files[0];
        doc.currentFile = file;
        doc.name = file.name;
        //this.fileName = file.name;
      } else {
        //this.fileName = 'Select File';
      }
    }

    upload(doc: ClientDocument): void {
      if (true) {  
        const formData = new FormData();
        formData.append(doc.name, doc.currentFile);
        this.http.post(this.baseUrl + 'individual/doc/upload', formData, this.setHeader()).subscribe({
          next: (x) =>{
            doc.url = x.toString();
            console.log(x);
          },
          error: (msg)=> {
            console.log(msg);
          }
        });
      }
    }

    setHeader() {
      var userId = localStorage.getItem('userId');
      var token = localStorage.getItem('token');
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token,
        UserId : userId || ''
      });
      return {
        headers: headers
     };
    }
  
  ngOnInit(): void {
    this.docs = [{
        id: '00000000-0000-0000-0000-000000000000', rawNumber : 1, name: '', url : '', changed:false, currentFile : this.myfile
      }
    ];
    this.selectedDoc = this.docs[0];
  }

  AddNew() {
  
    var n = Math.max(...this.docs.map(o => o.rawNumber)) + 1;
    if(n == undefined || n == -Infinity || n == Infinity)
    {
      n = 1;
    }

    this.docs = this.docs.concat([{
      id: '00000000-0000-0000-0000-000000000000', rawNumber : n, name: '', url : '', changed:false, currentFile : this.myfile
    }])
  
  }

  removeCurrent(cd: ClientDocument) {
    this.docs = this.docs.filter(x=> x.rawNumber != cd.rawNumber)
  }
        
  uploadDocuments(_t14: TemplateRef<any>) {
      throw new Error('Method not implemented.');
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
    
    // this.docs = [{
    //   id: 'd986f9fb-1d97-43f7-b6a8-910b686dd659', name: 'AvailabilityDoc1', url : 'url1', changed:false, currentFile : this.myfile
    //   },
    //   {
    //     id: 'd986f9fb-2d97-43f7-b6a8-910b686dd659', name: 'AvailabilityDoc2', url : 'url2', changed:false, currentFile : this.myfile
    //   },
    //   {
    //     id: 'd986f9fb-3d97-43f7-b6a8-910b686dd659', name: 'AvailabilityDoc3', url : 'url3', changed:false, currentFile : this.myfile
    //   }
    // ];
    // this.selectedDoc = this.docs[0];

      const url1 = `https://forms.office.com/Pages/ResponsePage.aspx?id=iQpQ2_MW70CWPnEqvgNJgK0NaNAv-4dArQpbNCfBtjNUQ0hLRlEzVzlNNkRFQkQ0MzFDMUU0OFRPQy4u`;
      this.docSrc1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
      this.dialogRef = this.dialog.open(templateRef, {
       width: '100%',
       height:'100%'
     });
  }
  
  OnClick() {

  }

  Save(docs: ClientDocument[]): void {
    var userId = localStorage.getItem('userId');
    var url = this.baseUrl + 'individual/'+userId+'/doc';
    this.http.post(url, docs, this.setHeader()).subscribe({
      next: (x) =>{
        console.log(x);
        //alert("Completed : " + x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }
}
