import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignteacherService {

  apiurl: any
  token:any

  constructor(private http: HttpClient,@Inject('baseurl')_baseurl:any, private authservice:AuthService) { 
    this.apiurl = _baseurl
    this.token = this.authservice.gettoken()
  }

  add(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'assignteacher/add',form, {headers:header_obj})
  }

  getall(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'assignteacher/getall',form, {headers:header_obj})
  }

  getsingle(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'assignteacher/getsingle',form, {headers:header_obj})
  }
  
  update(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'assignteacher/update',form, {headers:header_obj})
  }

  delete(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'assignteacher/delete',form, {headers:header_obj})
  }

  block(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'assignteacher/block',form, {headers:header_obj})
  }
}
