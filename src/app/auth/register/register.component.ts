import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  type :string = "password"
  istext :boolean = false
  eyeIcon :string = "fa-eye-slash"
  registrationForm!:FormGroup
  dob!: FormControl
  types!: Array<string>


  constructor(private fb : FormBuilder, private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.dob = new FormControl('1980-01-01');
    this.types = ['Individual', 'Corporate', 'Assessor'];
    this.registrationForm = this.fb.group({
      name:['', Validators.required],
      dob:['', Validators.required],
      email:['', Validators.required, Validators.email],
      username:['', Validators.required],
      password:['', Validators.required],
      type:['', Validators.required]

    });
  }

  showPass(){
    this.istext = !this.istext;
    this.istext ? this.type="text" : this.type="password";
    this.istext ? this.eyeIcon="fa-eye-slash" : this.eyeIcon="fa-eye";
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Do something with the registration form data here.
    }
  }
}
