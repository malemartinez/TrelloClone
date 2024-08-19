import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { switchMap , tap } from 'rxjs';
import { TokenService } from './token.service';
import { LoginResponse } from '@models/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = environment.API_URL;

  constructor(
    private http:HttpClient,
    private tokenService:TokenService,
  ) { }

  login(email:string, password:string){
    return this.http.post<LoginResponse>(`${this.api_url}api/v1/auth/login`, {
      email,
      password
    })
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    )
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

  recovery(email:string){
    return this.http.post<{"link": string,"recoveryToken": string }>(`${this.api_url}api/v1/auth/recovery`, {email})
  }

  changePassword(newPassword: string, token:string){
    return this.http.post(`${this.api_url}api/v1/auth/change-password`, {newPassword, token})
  }

  logout(){
    this.tokenService.deleteToken();
  }
}
