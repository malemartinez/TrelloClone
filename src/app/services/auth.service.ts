import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { switchMap } from 'rxjs';

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

  register(email:string, name:string, password:string){
    return this.http.post(`${this.api_url}api/v1/auth/register`, {
      email,
      name,
      password
    })
  }

  registerAndLogin(email:string, name:string, password:string){
    return this.register(email,name,password)
    .pipe(
      switchMap(()=> this.login(email,password) )
    )
  }

  isAvailable(email:string){
    return this.http.post<{"isAvailable": boolean}>(`${this.api_url}api/v1/auth/is-available`, {email})
  }
}
