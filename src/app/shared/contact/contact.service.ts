import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiurl:any
  token:any

  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any, private authservice:AuthService) { 
    this.apiurl = _baseurl
    this.token = this.authservice.gettoken()
  }

  add(form:any){
    var header_obj = new HttpHeaders().set('authorization',this.token)
    return this.http.post(this.apiurl+'contact/add',form, {headers:header_obj})
  }
}
