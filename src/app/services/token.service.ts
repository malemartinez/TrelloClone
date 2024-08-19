import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveItem(token:string){
    localStorage.setItem('token', token)
  }
  getItem(){
    return localStorage.getItem('token')
  }
  deleteItem(){
    localStorage.removeItem('token')
  }
}
