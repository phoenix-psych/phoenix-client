import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

value: string = 'sachin12';
dynamicSrc!: SafeResourceUrl;

OnClick() {
}

  constructor(public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto,
    private sanitizer: DomSanitizer) { }

    ngOnInit() {
      const url = `https://docs.google.com/forms/d/e/1FAIpQLSdD0H6NwN_AeCFOXjR6tCHUTOw1cdIzls577plKO9hvl4TRYw/viewform?entry.1698054666=${this.value}`;
      this.dynamicSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    

}
