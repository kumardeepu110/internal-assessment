import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DepartmentService } from '../shared/department/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{

  
  adddepartment = new FormGroup({
    departmentName: new FormControl()
  })
  
  constructor(private router:Router, private departmentservice:DepartmentService, private toastr: ToastrService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
  }

  add(){
    this.spinner.show()
    this.departmentservice.add(this.adddepartment.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-department')
        }
        else{
          this.toastr.error(res.message)
        }
      },
      err =>{
        console.log("error",err)
        this.spinner.hide()
        this.toastr.error(err)
      }
    )
  }

}
