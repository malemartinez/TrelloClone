import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = environment.API_URL;

  constructor(
    private http:HttpClient
  ) { }

  login(email:string, password:string){
    return this.http.post(`${this.api_url}api/v1/auth/login`, {
      email,
      password
    })
  }
}
