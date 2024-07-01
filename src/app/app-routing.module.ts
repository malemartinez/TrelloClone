import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'board',
    component:BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
