import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    SharedModule

  ]
})
export class BoardsModule { }
