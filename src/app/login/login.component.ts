import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TeacherService } from '../shared/teacher/teacher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router, private authservice:AuthService, private toastr:ToastrService, private spinner:NgxSpinnerService, private teacherloginService:TeacherService){}


  loginform = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  ngOnInit(): void {
    
  }

  login(){
    this.spinner.show()
    this.teacherloginService.login(this.loginform.value).subscribe(
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
