import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/";

  constructor(private http:HttpClient) { } 

  getAllUser(): Observable<Object>{
    return this.http.get<User[]>(this.baseURL+"viewAllUser")

  }

  searchUser(empid: number): Observable<any>{
    return this.http.get<any>(`${this.baseURL+"findUser"}/${empid}`)
  }


  loginUser(user : User): Observable<any>{
    return this.http.get<boolean>(this.baseURL+"login")

  }




}
