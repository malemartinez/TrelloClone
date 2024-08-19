import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {faAngleDown, faBell , faClose, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faBell= faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  isOpen = false;
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
