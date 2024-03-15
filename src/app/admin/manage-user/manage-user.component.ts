import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface UserDto {
  id: string;
  name: string;
  status: string;
}

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  users !: UserDto[];
  private baseUrl:string = environment.baseApiUrl;
  // @Input() clientId = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<UserDto[]>(`${this.baseUrl}user`).subscribe(
        x => {
          this.users = x;
      });
  }
  
  makeAdmin(doc: UserDto) {
    
  }
}
