import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit{

  constructor(private router:Router, private authservice:AuthService, private toastr:ToastrService, private spinner:NgxSpinnerService, private studentloginService:StudentService){}


  loginform = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  ngOnInit(): void {
    
  }

  login(){
    this.spinner.show()
    this.studentloginService.login(this.loginform.value).subscribe(
      (res:any)=>{
      if(res.success){
        this.spinner.hide()
        this.toastr.success(res.message)
        this.authservice.setdata(res)
        this.router.navigateByUrl('/layout/home')
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