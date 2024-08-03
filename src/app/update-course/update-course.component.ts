import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CoursesService } from '../shared/courses/courses.service';
import { DepartmentService } from '../shared/department/department.service';
import { BranchService } from '../shared/branch/branch.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit{

  
  updatecourses= new FormGroup({
    _id: new FormControl(),
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseName: new FormControl()
  })

  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private courseservice:CoursesService, private deptservice:DepartmentService, private branchservice:BranchService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.updatecourses.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getdept()
    this.getbranch()
    this.getcourse()
  }

  alldept:any

  getdept(){
    this.deptservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.alldept = res.data
      }
    )
  }

  allbranch:any

  getbranch(){
    this.branchservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allbranch = res.data
      }
    )
  }


  getcourse(){
    this.courseservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updatecourses.patchValue({'departmentId':res.data.departmentId._id})
        this.updatecourses.patchValue({'branchId':res.data.branchId._id})
        this.updatecourses.patchValue({'courseName':res.data.courseName})
      }
    )
  }

  update(){
    this.spinner.show()
    this.courseservice.update(this.updatecourses.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-courses')
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
