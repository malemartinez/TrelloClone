import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/button/btn.component';


@NgModule({
  declarations: [BtnComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[BtnComponent]
})
export class SharedModule { }
