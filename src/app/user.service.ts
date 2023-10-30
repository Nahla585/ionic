import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Register(User:any) {
    return this.http.post(
      'http://localhost:3000/api/newuser',
      User
    );
  }
  
  getAllUsers() {
    return this.http.get(
      'http://localhost:3000/api/userslist'
    );
  }

  login(User:any){
    return this.http.post('http://localhost:3000/api/login',User)
  }
}
