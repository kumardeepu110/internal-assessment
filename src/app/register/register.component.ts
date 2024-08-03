import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { RegisterService } from '../shared/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  
  register = new FormGroup({
    first_name: new FormControl(),
    last_name : new FormControl(),
    email : new FormControl(),
    password: new FormControl(),
    phone: new FormControl() 
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private registerservice:RegisterService){}

  ngOnInit(): void {
    
  }

  submit(){
    this.spinner.show()
    this.registerservice.register(this.register.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          // this.router.navigateByUrl('')
        }
        else{
          this.toastr.error(res.message)
        }
      },
      err=>{
        this.spinner.hide()
        this.toastr.error(err)
      }
    )
  }

}
