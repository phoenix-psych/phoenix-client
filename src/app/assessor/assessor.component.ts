import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface UserDto {
  id: string;
  name: string;
  type: string;
  isAdmin:false;
}

@Component({
  selector: 'app-assessor',
  templateUrl: './assessor.component.html',
  styleUrls: ['./assessor.component.scss']
})
export class AssessorComponent implements OnInit {

  opened=false;
  isAdmin=false;
  private baseUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var userId = localStorage.getItem('userId');
    this.http.get<UserDto>(`${this.baseUrl}user/${userId}`).subscribe(
      x => {
        this.isAdmin = x.isAdmin;
    });
  }

  
  logout(){
    localStorage.clear();
  }
}
