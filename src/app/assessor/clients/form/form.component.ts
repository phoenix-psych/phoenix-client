import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClientDocument } from 'src/app/models/utility/document.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NotifyService } from 'src/app/shared/notify.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // value: string = 'sachin12';
  // dynamicSrc!: SafeResourceUrl;


  constructor(public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto,
    private sanitizer: DomSanitizer,
    private http: HttpClient, private notificationService: NotifyService) { }

    docs !: ClientDocument[];
    private baseUrl:string = environment.baseApiUrl;

    ngOnInit() {
      this.http.get<ClientDocument[]>(`${this.baseUrl}individual/${this.data.id}/doc`).subscribe(
          x => {
            this.docs = x;
        });
    }
    
    downloadfile(doc: ClientDocument) {
      this.http.get(`${this.baseUrl}individual/${this.data.id}/doc/${doc.id}`, { responseType: 'blob' }).subscribe((blob: Blob) => {
        if(blob)
        {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${doc.name}`; // Replace with your desired filename
          link.click();
          URL.revokeObjectURL(url);
          this.notificationService.success('File Downloaded successfully');
        }
      });
    }

    OnClick() {
    }
}
