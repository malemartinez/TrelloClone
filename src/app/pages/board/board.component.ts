import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faStar, faBox, faWaveSquare, faAngleDown, faAngleUp , faHeart ,faBorderAll, faUsers, faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  faTrello = faTrello
  faStar = faStar
  faBox =faBox
  faWaveSquare =faWaveSquare
  faAngleDown =faAngleDown
  faAngleUp =faAngleUp
  faHeart =faHeart
  faBorderAll =faBorderAll
  faUsers =faUsers
  faGear =faGear

  constructor() { }

  ngOnInit(): void {
  }

}
