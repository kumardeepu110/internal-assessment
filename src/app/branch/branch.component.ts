import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup } from '@angular/forms';
import { BranchService } from '../shared/branch/branch.service';
import { DepartmentService } from '../shared/department/department.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit{


  
  constructor(private branchservice:BranchService, private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService,private departmentservice : DepartmentService){}

  addbranch = new FormGroup({
    departmentId: new FormControl(),
    branchName: new FormControl()
  })

  ngOnInit(): void {
    this.getalldepartment()
  }

  alldepartment:any

  getalldepartment(){
    this.departmentservice.getall({status:true}).subscribe(
      (res:any)=>{
        console.log(res.data);
        
        this.alldepartment = res.data
      },
      err=>{

      }
    )
  }

  add(){
    
    this.spinner.show()
    this.branchservice.add(this.addbranch.value).subscribe(
      (res:any)=>{
        console.log(res.message);
        this.spinner.hide()
        if(res.succuss){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-branch')
        }
        else{
          this.toastr.error(res.message)
        }
      },
      err=>{
        this.toastr.error(err)
        this.spinner.hide()
      }
    )
  }
}
