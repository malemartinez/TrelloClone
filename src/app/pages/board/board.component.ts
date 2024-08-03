import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';

import { columns, ToDo } from 'src/app/models/todos.model';
import { faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faFlipboard } from '@fortawesome/free-brands-svg-icons';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [

  `
  .cdk-drag-preview {
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
              0 8px 10px 1px rgba(0, 0, 0, 0.14),
              0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .cdk-drag-placeholder {
    opacity: 0;
  }
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  faPlus = faPlus;
  faFlipboard = faFlipboard;
  faEllipsis = faEllipsis;

  lists: columns[]=[
    {
      title:'ToDos',
      todos: [
        {
          id: '1',
          title: 'Write down my linkedin description'
        },
        {
          id: '2',
          title: 'Task 2'
        },
        {
          id: '3',
          title: 'Task 3'
        },
        {
          id: '4',
          title: 'Task 4'
        },
      ]
    },
    {
      title:'Doing',
      todos: [
        {
          id: '1',
          title: 'Write down my linkedin description'
        },
        {
          id: '2',
          title: 'Task 2'
        },
        {
          id: '3',
          title: 'Task 3'
        },
        {
          id: '4',
          title: 'Task 4'
        },
      ]
    },
    {
      title:'Done',
      todos: [
        {
          id: '1',
          title: 'Write down my linkedin description'
        },
        {
          id: '2',
          title: 'Watch 3 videos'
        },
        {
          id: '3',
          title: 'Task 3'
        },
        {
          id: '4',
          title: 'Task 4'
        },
      ]
    }
  ]


  constructor(public dialog: Dialog) { }



  drop(event: CdkDragDrop<ToDo[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dropColumn(event: CdkDragDrop<any>){
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }

  addList(){
    this.lists.push()
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open( DialogComponent, {
      minWidth: '500px',
      maxWidth: '768px',
      data: { item : todo },
    });

    dialogRef.closed.subscribe(result => {
      console.log( result );
      // this.animal = result;
    });
  }


}
