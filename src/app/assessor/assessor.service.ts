import { Injectable } from '@angular/core';
import { Assessor } from '../models/assessor.model';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessorService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  UserList: Assessor[] = [];

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    userType: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      userType: 0,
      hireDate: '',
      isPermanent: false
    });
  }


  getUsers() : Observable<Assessor[]> {
    return this.http.get<Assessor[]>(this.baseApiUrl + 'user');
  }

  insertUser(user : Assessor): Observable<Assessor> {
    return this.http.post<Assessor>(this.baseApiUrl + 'users', user);
  }

  updateUser(user : Assessor) : Observable<Assessor> {
    return this.http.put<Assessor>(this.baseApiUrl + 'users', user);
  }

  deleteUser(id: string) {
    return this.http.delete<Assessor>(this.baseApiUrl + 'users/'+id);
  }

  populateForm(user : any) {
    // // this.form.setValue(_.omit(user,'departmentName'));
  }
}
