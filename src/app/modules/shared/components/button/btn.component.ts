import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() btnColor: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    const colorsList: { [key:string] : string} = {
      success: 'bg-success-700 hover:bg-success-800 focus:ring-success-300 text-white font-medium',
      danger: 'bg-red-700 hover:bg-red-800 focus:ring-red-300 text-gray-700',
      primary: 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 text-black font-medium',
      yellow: 'bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 text-gray-900',
      sky: 'bg-sky-700 hover:bg-sky-800 focus:ring-sky-300',
      graylight: 'bg-[#A1BDD914] hover:bg-hoverItems focus:ring-gray-300 text-textColor'
    };
    return colorsList[this.btnColor];
  }

}
