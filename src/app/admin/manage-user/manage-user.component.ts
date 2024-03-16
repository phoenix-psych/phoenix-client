import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  status: string;
  name: string;
  type: string;
  isAdmin:boolean;
  isAccessor:boolean;
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
          this.users.filter((x) => x.type == 'Assessor').forEach(t => (t.isAccessor = true));
      });
  }
  
  makeAdmin(user: UserDto) {
    this.http.put<UserDto>(this.baseUrl + 'user/admin', user).subscribe(
      x => {
        console.log('Updated');
        this.ngOnInit();
    });
  }
}
