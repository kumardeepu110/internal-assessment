import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private spinner:NgxSpinnerService, private router:Router, private authservice:AuthService){}

  email:any

  ngOnInit(): void {
    this.spinner.show()
    
    if(this.authservice.getEmail()){
      setTimeout(() => {
        this.spinner.hide()
      }, 1000);
    }
  }
}
