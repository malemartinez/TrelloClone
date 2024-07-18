import { Component, Inject, OnInit } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { faBars, faUser, faXmark , faClock , faCheckSquare, faTag , faCheckToSlot} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todos.model';

interface InputData {
  item: ToDo
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  faXmark = faXmark;
  faBars = faBars;
  faUser =faUser;
  faClock = faClock;
  faCheckSquare = faCheckSquare;
  faTag = faTag;
  faCheckToSlot = faCheckToSlot;

  todo : ToDo;

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: InputData
  ) {this.todo = data.item }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
