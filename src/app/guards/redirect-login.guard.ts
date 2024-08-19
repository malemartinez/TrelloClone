import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { TokenService } from '@services/token.service';


@Injectable({
  providedIn: 'root'
})
export class RedirectLoginGuard implements CanActivate {
  constructor(
    private tokenService:TokenService,
    private router:Router
  ){

  }

  canActivate() {
    const token = this.tokenService.getToken();
    if(token){
      this.router.navigate(['/app'])
    }
    return true;
  }

}
