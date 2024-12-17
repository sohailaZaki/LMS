import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="http://localhost:7240/api/RegisterAndLogin/"
  constructor(private http :HttpClient) { }

  signUp(userobj:any){
      return this.http.post<any>(`${this.baseUrl}Register`,userobj)
  }

  login(loginobj:any){
    return this.http.post<any>(`${this.baseUrl}Login`,loginobj)
  }
}
