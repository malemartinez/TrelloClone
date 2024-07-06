import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todos.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {

  todos: ToDo []=[
    {
      id: '1',
      title: 'Task 1'
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
  

  constructor() { }



  drop(event: CdkDragDrop<any>){
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

}
