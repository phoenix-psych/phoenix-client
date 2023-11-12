import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseApiUrl //"https://localhost:7233/api/"
  constructor(private http : HttpClient) { }

  login(loginObj:any){
    console.log('login');
    return this.http.post<any>(`${this.baseUrl}login`, loginObj);
  }

  register(registerObj:any){
    console.log('user');
    return this.http.post<any>(`${this.baseUrl}user`, registerObj);
  }
}
