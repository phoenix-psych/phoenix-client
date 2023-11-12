import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl 
  form!:FormGroup
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) {
  }

  selectedValue!: string;
// upload
currentFile?: File;
progress = 0;
message = '';
fileName = 'Select File';

selectFile(event: any): void {
  if (event.target.files && event.target.files[0]) {
    const file: File = event.target.files[0];
    this.currentFile = file;
    this.fileName = this.currentFile.name;
  } else {
    this.fileName = 'Select File';
  }
}

upload(): void {
  this.progress = 0;
  this.message = "";

  if (this.currentFile) {
    // this.uploadService.upload(this.currentFile).subscribe(
    //   (event: any) => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progress = Math.round(100 * event.loaded / event.total);
    //     } else if (event instanceof HttpResponse) {
    //       this.message = event.body.message;
    //       this.fileInfos = this.uploadService.getFiles();
    //     }
    //   },
    //   (err: any) => {
    //     console.log(err);
    //     this.progress = 0;

    //     if (err.error && err.error.message) {
    //       this.message = err.error.message;
    //     } else {
    //       this.message = 'Could not upload the file!';
    //     }

    //     this.currentFile = undefined;
    //   });
  }

}

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: [''],
      answer4: [''],
      answer5: [''],
      answer6: [''],
      answer7: [''],
    });

  }

}
