import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authservice:AuthService, private router:Router){}
  email:any
  usertype:any

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () =>false

    if(this.authservice.getEmail() != null){
      this.email = this.authservice.getEmail()
    }

    if(this.authservice.getUserType() != null){
      this.usertype = this.authservice.getUserType()
    }
  }

  logout(){
    this.authservice.removedata()
    this.router.navigateByUrl('/layout/login')
  }
}
