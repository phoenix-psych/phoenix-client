import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/authservice.service';
import { LoadingService } from 'src/app/loading.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type :string = "password"
  istext :boolean = false
  eyeIcon :string = "fa-eye-slash"
  loginForm!:FormGroup; 


  constructor(private fb : FormBuilder, private auth:AuthService, private router:Router, private notificationService: NotifyService, private loadingService:LoadingService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]

    })
  }

  showPass(){
    this.istext = !this.istext;
    this.istext ? this.type="text" : this.type="password";
    this.istext ? this.eyeIcon="fa-eye-slash" : this.eyeIcon="fa-eye";

  }

  OnSubmit(){
    this.loadingService.showLoading();
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          if(res.statusCode === 200)
          {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userType', res.userType);
            localStorage.setItem('userId', res.userId);
            this.loginForm.reset();
            this.notificationService.success(`Welcome - ${res.name}`);
            this.LoadUserScreen(res.userType);
          }
          else{
            alert("StatusCode : " + res.statusCode);
            localStorage.clear();
          }

          this.loadingService.hideLoading();
        },
        error:(err)=>{
          alert("Exception" + err?.message);
          localStorage.clear();
          this.loadingService.hideLoading();
        }
      })

    }else{
      this.validateAllFormFields(this.loginForm);
      this.loadingService.hideLoading();
    }
  }

  LoadUserScreen(type : number){
    //this.router.navigate(['assessor']);
    switch (type) {
        case 0:
          this.router.navigate(['admin']);
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          this.router.navigate(['individual']);
          break;
        case 5:
          this.router.navigate(['assessor']);
          break;
        case 6:
          this.router.navigate(['corporate']);
          break;
        default:
          this.router.navigate(['assessor']);
          break;
    }
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

