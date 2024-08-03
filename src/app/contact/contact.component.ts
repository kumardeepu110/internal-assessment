import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../shared/contact/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  
  constructor(private router:Router, private contactservice:ContactService, private spinner:NgxSpinnerService, private toastr:ToastrService){}
  
  contact = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl()
  })

  ngOnInit(): void {

  }

  send(){
    this.spinner.show()
    this.contactservice.add({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.spinner.hide()
          this.toastr.success(res.message)
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
