import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BranchService } from '../shared/branch/branch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../shared/department/department.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit{

  constructor(private branchservice:BranchService, private router:Router, private spinner:NgxSpinnerService, private toastr:ToastrService, private activatedroute:ActivatedRoute,private departmentservice : DepartmentService){}

  updatebranch= new FormGroup({
    _id: new FormControl(),
    departmentId: new FormControl(),
    branchName: new FormControl()
  })

  ngOnInit(): void {
    this.updatebranch.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getsinglebranch()
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
  
  getsinglebranch(){
    this.branchservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updatebranch.patchValue({'departmentId':res.data.departmentId._id})
        this.updatebranch.patchValue({'branchName':res.data.branchName})
      },
      err=>{
        
      }
    )
  }

  update(){
    this.spinner.show()
    this.branchservice.update(this.updatebranch.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-branch')
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
