import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiurl:any
  token:any

  constructor(private http:HttpClient,@Inject('teacherurl')_treacherurl:any, private authservice:AuthService) { 
    this.apiurl = _treacherurl
    this.token = this.authservice.gettoken()
  }

  login(form:any){
    return this.http.post(this.apiurl+'teacher/login',form)
  }

  add(form:any){
    return this.http.post(this.apiurl+'teacher/add',form)
  }

  getall(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'teacher/getall',form, {headers:header_obj})
  }

  getsingle(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'teacher/getsingle',form, {headers:header_obj})
  }

  update(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'teacher/update',form, {headers:header_obj})
  }

  delete(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'teacher/delete',form, {headers:header_obj})
  }

  block(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'teacher/block',form, {headers:header_obj})
  }
}
