import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() btnColor: string = '';

  colorbtn = '';

  constructor() { }

  ngOnInit(): void {
    if(this.btnColor){
      this.colorbtn = this.btnColor
    }
  }

}
