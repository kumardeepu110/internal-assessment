import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiurl: any

  constructor(private http:HttpClient, @Inject('baseurl')_baseurl:any) { 
    this.apiurl = _baseurl
  }

  dashboard(form:any){
    console.log(this.apiurl+'dashboard')
    return this.http.post(this.apiurl+'dashboard',form)
  }
}
