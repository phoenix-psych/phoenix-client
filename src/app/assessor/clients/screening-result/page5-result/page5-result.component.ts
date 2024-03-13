import { Component, Inject, Input, OnInit } from '@angular/core';
import { ClientDocument } from 'src/app/models/utility/document.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page5-result',
  templateUrl: './page5-result.component.html',
  styleUrls: ['./page5-result.component.scss']
})
export class Page5ResultComponent implements OnInit {

  constructor(private http: HttpClient) { }

    docs !: ClientDocument[];
    private baseUrl:string = environment.baseApiUrl;
    @Input() clientId = '';

    ngOnInit() {
      this.http.get<ClientDocument[]>(`${this.baseUrl}individual/${this.clientId}/doc`).subscribe(
          x => {
            this.docs = x;
        });
    }
    
    downloadfile(doc: ClientDocument) {
      this.http.get(`${this.baseUrl}individual/${this.clientId}/doc/${doc.id}`, { responseType: 'blob' }).subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${doc.name}`; 
        link.click();
        URL.revokeObjectURL(url);

      });
    }

}
