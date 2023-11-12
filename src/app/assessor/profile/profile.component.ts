import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile.model';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private notificationService: NotifyService, private _formBuilder: FormBuilder) { }

  form!:FormGroup
  private baseUrl:string = environment.baseApiUrl 
  // form = this._formBuilder.group({
  //   id: new FormControl(null),
  //   fullName: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.email),
  //   dob: new FormControl('', Validators.required),
  //   phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   currentAddress: new FormControl('', Validators.required),
  //   pin: new FormControl('', Validators.required),
  //   pronoun: new FormControl('', Validators.required)
  // });

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id:[null, Validators.nullValidator],
      fullName:['',Validators.required],
      email:['', Validators.email],
      dob:['', Validators.required],
      phoneNumber:['', Validators.required,, Validators.minLength(8)],
      currentAddress:['', Validators.required],
      pin:['', Validators.required],
      pronoun:['', Validators.required],
      imageUrl:['', Validators.required],
    });

    this.getProfile()
    .subscribe({
      next: (x) =>{
        this.form = this._formBuilder.group(x);
        this.file = this.form.controls['imageUrl'].value;
        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
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


  onSubmit() {
    if (this.form.valid) {
      // var formData = this.form.value;
      //this.form.addControl('image', this.imageUrl);
      //this.form.setValue(imageUrl, this.image);
      // this.form.add("file", this.image);
      this.form.patchValue({
        imageUrl: this.imageUrl,
      });

      this.insertProfile(this.form.value).subscribe({
        next: (user) =>{
          console.log(user);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
      //this.form.reset();
      //this.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      //this.onClose();
    }
  }

  submit() {}

  onClose() {
    this.form.reset();
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    // this.form.setValue({
    //   id: null,
    //   fullName: '',
    //   email: '',
    //   mobile: '',
    // });
  }

  onClear() {
    this.form.reset();
    this.notificationService.success(':: Submitted successfully');
  }

  file: string = '';
  image!: File;
  imageUrl: string = '';

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      this.image = files[0];
      const _file = URL.createObjectURL(files[0]);
      //this.file = _file;
      const formData = new FormData();
      formData.append(this.image.name, this.image);
      this.http.post(this.baseUrl + 'assessor/profile/upload', formData, this.setHeader()).subscribe({
        next: (x) =>{
          this.imageUrl = x.toString();
          this.form.patchValue({
            imageUrl: this.imageUrl,
          });
          this.file = this.imageUrl;

          console.log(x);
        },
        error: (msg)=> {
          console.log(msg);
        }
      });;
      this.resetInput();   
    }
  
 }

 resetInput(){
  const input = document.getElementById('avatar-input-file') as HTMLInputElement;
  if(input){
    input.value = "";
  }
}

// api call

getProfile() : Observable<Profile> {
  var id  = localStorage.getItem('userId');
  // var id = this.form.get('id')?.value;
  return this.http.get<Profile>(this.baseUrl + 'assessor/profile/' + id, this.setHeader());
}

insertProfile(user : Profile): Observable<Profile> {
  return this.http.post<Profile>(this.baseUrl + 'assessor/profile', user, this.setHeader());
}

populateForm(user : Profile) {
  // // this.form.setValue(_.omit(user,'departmentName'));
}

}
