import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartmentService } from '../shared/department/department.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit{
  
  updatedepartment = new FormGroup({
    _id: new FormControl(),
    departmentName: new FormControl()
  })
  
  constructor(private router:Router, private departmentservice: DepartmentService, private activatedroute: ActivatedRoute, private toastr: ToastrService, private spinner: NgxSpinnerService){}
  
  ngOnInit(): void {
    this.updatedepartment.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getsingledata()
  }
 
  getsingledata(){
    this.departmentservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updatedepartment.patchValue({'departmentName':res.data.departmentName})
      },
      err=>{

      }
    )
  }

  update(){
    this.spinner.show()
    this.departmentservice.update(this.updatedepartment.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/manage-department")
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

