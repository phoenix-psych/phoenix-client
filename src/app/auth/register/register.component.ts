import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/notify.service';
import { LoadingService } from 'src/app/loading.service';

enum Answer {
  No = "No",
  Yes = "Yes",
  School_Student = "",
Graduate_Student = 2,
Post_Graduate = 3,
Private_Individual = 4,
ParentOrGuardian = 5,
University = 6,
Organizatiion = 7,
Assessor = 8
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  type :string = "password"
  istext :boolean = false
  isChecked:boolean = false
  initialized:boolean = false
  eyeIcon :string = "fa-eye-slash"
  registrationForm!:FormGroup
  dob!: FormControl
  types!: Array<string>
  selectedOption!: string;

  constructor(private fb : FormBuilder, private auth:AuthService, private router:Router, private notificationService: NotifyService, private loadingService:LoadingService) { }

  ngOnInit() {
    this.dob = new FormControl('1980-01-01');
    this.types = [
      'School Student',
      'Graduate Student',
      'Post Graduate',
      'Private Individual',
      'Parent / Guardian',
      'University',
      'Organizatiion / Workplace',
      'Assessor',
      'Psychologist',
      'Tutor',
      'Counsellor',
  ];
    this.registrationForm = this.fb.group({
      name:['', Validators.nullValidator],
      firstName:['',Validators.required],
      lastName:['', Validators.required],
      dob:['', Validators.required],
      email:['', Validators.required],
      username:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      type:['', Validators.required],
    });
  }

  showPass(){
    this.istext = !this.istext;
    this.istext ? this.type="text" : this.type="password";
    this.istext ? this.eyeIcon="fa-eye-slash" : this.eyeIcon="fa-eye";
  }

  onOptionChange() {
    this.initialized === true;
  }

  getUserType(type :string) {
    switch(this.selectedOption) { 
      case "School Student": { 
        return 1;
      } 
      case "Graduate Student": { 
        return 2;
      } 
      case "Post Graduate": {
        return 3;    
      } 
      case "Private Individual": { 
        return 4;
      }  
      case "University": { 
        return 5;
      }  
      case "Organizatiion / Workplace": { 
        return 6;
      }  
      case "Assessor": { 
        return 7;
      }  
      case "Psychologist": { 
        return 7;
      }    
      case "Tutor": { 
        return 8;
      }    
      case "Counsellor": { 
        return 9;
      }
      default : {
        return 0;
      }        
    }
  }
  
  doSomething(event:any){
    if(event.target.checked==true){
      this.isChecked = true;
    }
    else{
      this.isChecked = false;
    }
  }

  onSubmit() {
    if (this.isChecked == true) {
      this.registration();
    }
    else{
      alert("Please confirm that you have read privacy policy");
    }
  }

  registration() {
    this.loadingService.showLoading();
    if (this.registrationForm.valid) {
      this.auth.register(this.registrationForm.value)
      .subscribe({
        next:(res)=>{
          this.registrationForm.reset();
          this.notificationService.success(`User (${res.data.firstName}) - Registered Successfully, Please login with credentials.`);
          this.router.navigate(['login']);
        },
        error:(err)=>{
          alert(err?.error.message);
        }
      })
    }else{
      this.validateAllFormFields(this.registrationForm);
      alert("Invalid Form");
    }

    this.loadingService.hideLoading();
  }

  private updateUserType(formGroup : FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control && field === 'userType')
      {
        control.value === this.getUserType(this.selectedOption);
      }

    });
  }

  private validateAllFormFields(formGroup : FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl)
      {
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control);
      }

    });
  }
}
