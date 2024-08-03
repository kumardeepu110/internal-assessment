import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setdata(form:any){
    console.log(form)
    localStorage.setItem('email',form.data.email)
    localStorage.setItem('token',form.token)
    localStorage.setItem('userType',form.data.userType)
    localStorage.setItem('studentId',form.data._id)
  }

  getEmail(){
    return localStorage.getItem('email')
  }

  getUserType(){
    return localStorage.getItem('userType')
  }

  gettoken(){
    return localStorage.getItem('token')
  }

  getstudentId(){
    return localStorage.getItem('studentId')
  }

  removedata(){
    localStorage.clear()
  }
}
