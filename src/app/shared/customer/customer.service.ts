import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiurl : any
  token : any

  constructor(private http: HttpClient, @Inject('baseurl')_baseurl:any, private authservice : AuthService) { 
    this.apiurl = _baseurl
    this.token = this.authservice.gettoken()
  }

  add(form:any){
    return this.http.post(this.apiurl+"user/add",form)
  }
  login(form:any){
    return this.http.post(this.apiurl+"user/login",form)
  }

  getall(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"user/getall",form, {headers:header_obj})
  }

  update(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"user/update",form, {headers:header_obj})
  }

  getsingle(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"user/getsingle",form, {headers:header_obj})
  }

  delete(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"user/delete",form, {headers:header_obj})
  }

  block(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"user/block",form, {headers:header_obj})
  }
}
