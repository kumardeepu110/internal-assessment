import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  apiurl:any

  constructor(private http: HttpClient,@Inject('baseurl')_baseurl:any) { 
    this.apiurl= _baseurl
  }

  adminlogin(form:any){
    return this.http.post(this.apiurl+"user/login",form)
  }
}
