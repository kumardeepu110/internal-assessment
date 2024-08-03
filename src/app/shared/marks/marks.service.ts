import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  apiurl:any
  token:any

  constructor(private http:HttpClient, @Inject('baseurl')_baseurl:any, private authservice: AuthService) { 
    this.apiurl = _baseurl
    this.token = this.authservice.gettoken()
  }

  add(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/add',form, {headers:header_obj})
  }

  getall(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/getall',form, {headers:header_obj})
  }
  getbystudent(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/getbystudent',form, {headers:header_obj})
  }

  getsingle(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/getsingle',form, {headers:header_obj})
  }

  update(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/update',form, {headers:header_obj})
  }

  delete(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/delete',form, {headers:header_obj})
  }

  block(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'marks/block',form, {headers:header_obj})
  }
}
