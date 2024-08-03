import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiurl : any
  token : any

  constructor(private http:HttpClient, @Inject('baseurl')_baseurl:any, private authservice:AuthService) {
    this.apiurl = _baseurl
    this.token = this.authservice.gettoken()
  }

  add(form:any){
    console.log(form)
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"department/add",form,{headers : header_obj})
  }

  getall(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"department/getall",form, {headers:header_obj})
  }

  getsingle(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"department/getsingle",form, {headers:header_obj})
  }

  update(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"department/update",form, {headers:header_obj})
  }

  delete(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"department/delete",form, {headers:header_obj})
  }

  block(form:any){
    var header_obj = new HttpHeaders().set('Authorization',this.token);
    return this.http.post(this.apiurl+"department/block",form, {headers:header_obj})
  }
}


