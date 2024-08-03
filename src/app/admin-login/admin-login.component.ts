import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../shared/customer/customer.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  constructor(private router:Router, private authservice:AuthService, private toastr:ToastrService, private spinner:NgxSpinnerService, private loginService:CustomerService){}


  loginform = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  ngOnInit(): void {
    
  }

  login(){
    this.spinner.show()
    this.loginService.login(this.loginform.value).subscribe(
      (res:any)=>{
      if(res.success){
        this.spinner.hide()
        this.toastr.success(res.message)
        this.authservice.setdata(res)
        this.router.navigateByUrl('/layout/department')
      }

      else{
        this.spinner.hide()
        this.toastr.error(res.message)
      }
    },
    err=>{
      this.toastr.error(err)
    }
    )
  }  
  
}