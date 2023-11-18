import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ClientDto } from 'src/app/models/common/client.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  form !: FormGroup;
  assessorServices: Array<any> = [
    { Name:"SpLD Post 16 and HE",Value:"1" },
    { Name:"EAA",Value:"2" },
    { Name:"Diagnostic Assessment (Workplace)",Value:"3" },
    { Name:"Diagnostic Assessment (Education)",Value:"4" },
    { Name:"Pre-16",Value:"5" },
    { Name:"SpLD Coach - Education",Value:"6" },
    { Name:"SpLD Coach - Workplace",Value:"7" },
    { Name:"Occupational Psychologist (chartered)",Value:"8" },
    { Name:"Psychologist",Value:"9" },
    { Name:"Counsellor",Value:"10" }
  ];
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService,
    public dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      service: [0, Validators.required],
      phone: [''],
      status: [''],
    });

    // this.getClientById()
    // .subscribe({
    //   next: (x) =>{
    //     this.form = this.formBuilder.group(x);
    //     console.log(x);
    //   },
    //   error: (msg)=> {
    //     console.log(msg);
    //   }
    // });

  }
  
  selected : string = ''

  onSelectionchanged() {
    //alert(this.selected);
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

  getClientById() : Observable<ClientDto> {
    var id = this.form.get('id')?.value;
    return this.http.get<ClientDto>(this.baseUrl + 'client/' + id, this.setHeader());
  }

  onClear() {
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.form.valid) {
      if (!this.form.get('id')?.value)
      {
        this.insertClient(this.form.value).subscribe({
          next: (x) =>{
            console.log(x);
          },
          error: (msg)=> {
            console.log(msg);
          }
        });
      }
      else
      {
        this.updateClient(this.form.value).subscribe({
          next: (x) =>{
            console.log(x);
          },
          error: (msg)=> {
            console.log(msg);
          }
        });
      }

      this.form.reset();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.form.reset();
    this.dialogRef.close();
  }

  onDOBChange() {
    if (this.form.get('dob')?.value)
    {
        // let bdate = new Date(this.form.get('dob')?.value);
        // let timeDiff = Math.abs(Date.now() - bdate.getTime());
        // let ageYear = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        // let ageMonth = Math.floor(timeDiff / (1000 * 3600 * 24) % 365.25 / 31);
        // this.form.patchValue({
        //   ageYear: ageYear,
        //   ageMonth: ageMonth,
        // });
    }
  }

  insertClient(user : ClientDto): Observable<ClientDto> {
    return this.http.post<ClientDto>(this.baseUrl + 'client', user);
  }

  updateClient(user : ClientDto) : Observable<ClientDto> {
    return this.http.put<ClientDto>(this.baseUrl + 'client', user);
  }
}
