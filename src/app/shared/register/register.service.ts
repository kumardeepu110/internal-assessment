import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiurl:any

  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any, private authservice:AuthService) { 
    this.apiurl = _baseurl
  }

  register(form:any){
    return this.http.post(this.apiurl+'user/add',form)
  }
}
