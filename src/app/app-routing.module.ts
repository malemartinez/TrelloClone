import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'boards',
    component:BoardsComponent
  },
  {
    path:'board',
    component:BoardComponent
  },
  {
    path:'tables',
    component:TablesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
