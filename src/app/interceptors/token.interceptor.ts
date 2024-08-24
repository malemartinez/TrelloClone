import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContext,
  HttpContextToken
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { TokenService } from '@services/token.service';
import { AuthService } from '@services/auth.service';

const CHECK_TOKEN = new HttpContextToken<boolean>( ()=> false );

export function checkToken(){
  return new HttpContext().set(CHECK_TOKEN, true)
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,

  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isValidToken = this.tokenService.isValidToken();
    if(request.context.get(CHECK_TOKEN)){
      if(isValidToken){
        return this.addToken(request,next);
      }else{
        return this.updateRefreshTokenAndToken(request,next);
      }
    }
    return next.handle(request);
  }

  private addToken (request: HttpRequest<unknown>, next: HttpHandler){
    const token = this.tokenService.getToken();
    if (token){
      const authResponse = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(authResponse);
    }
    return next.handle(request);

  }
  private updateRefreshTokenAndToken (request: HttpRequest<unknown>, next: HttpHandler){
    const isValidRefreshToken = this.tokenService.isValidRefreshToken();
    const refresh_token = this.tokenService.getRefreshToken();
    if (isValidRefreshToken && refresh_token){
      return this.authService.refreshToken(refresh_token)
      .pipe(
        switchMap( ()=> this.addToken(request ,next ))
      )
    }
    return next.handle(request);

  }

}
