import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faStar, faBox, faWaveSquare, faAngleDown, faAngleUp , faHeart ,faBorderAll, faUsers, faGear, faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styles: [`
    .board-title:hover span::first{
      background-color: #00000040
    }
    .board-title:hover .star-icon{
      margin-right: 6px;
      opacity: 1;
      width: 18px;
    }

    `]
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello
  faStar = faStar
  faBox =faBox
  faWaveSquare =faWaveSquare
  faAngleDown =faAngleDown
  faAngleUp =faAngleUp
  faHeart =faHeart
  faBorderAll =faBorderAll
  faUsers =faUsers
  faGear =faGear;
  faClock = faClock

  constructor() { }

  ngOnInit(): void {
  }

}
