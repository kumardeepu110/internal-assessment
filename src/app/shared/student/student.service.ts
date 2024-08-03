import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiurl:any
  token:any

  constructor(private http:HttpClient, @Inject('studenturl')_studenturl:any, private authservice:AuthService) { 
    this.apiurl = _studenturl
    this.token = this.authservice.gettoken()
  }

  login(form:any){
    return this.http.post(this.apiurl+"student/login",form) 
  }

  add(form:any){
    return this.http.post(this.apiurl+"student/add",form) 
  }

  getall(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+"student/getall",form, {headers:header_obj}) 
  }

  getsingle(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+"student/getsingle",form, {headers:header_obj}) 
  }
  update(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+"student/update",form, {headers:header_obj}) 
  }
  delete(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+"student/delete",form, {headers:header_obj}) 
  }
  block(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+"student/block",form, {headers:header_obj}) 
  }
}
