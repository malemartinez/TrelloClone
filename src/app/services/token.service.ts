import { Injectable } from '@angular/core';
import { setCookie, getCookie , removeCookie } from 'typescript-cookie';
import { jwtDecode, JwtPayload } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token:string){
    setCookie('tokenCookie', token , { expires: 365 , path: '/' });
  }
  getToken(){
    return getCookie('tokenCookie')
  }
  deleteToken(){
    removeCookie('tokenCookie')
  }

  isValidToken(){
    const token = this.getToken();
    if(!token){
      return false;
    }
    const decodeToken = jwtDecode(token);
    if(decodeToken && decodeToken?.exp){
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp)
      const today = new Date();
      return tokenDate.getTime() > today.getTime()
    }

    return false;
  }
}
