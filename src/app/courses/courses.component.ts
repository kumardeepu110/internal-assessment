import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CoursesService } from '../shared/courses/courses.service';
import { BranchService } from '../shared/branch/branch.service';
import { DepartmentService } from '../shared/department/department.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  constructor(private router:Router, private toastr: ToastrService, private spinner:NgxSpinnerService, private courseservice:CoursesService, private branchservice:BranchService, private departmentservice:DepartmentService){}

  addcourses = new FormGroup({
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseName: new FormControl()
  })
  ngOnInit(): void {
    this.getallbranch()
    this.getalldepartment()
  }

  allbranch:any
  alldepartment:any

  getallbranch(){
    this.branchservice.getall({status:true}).subscribe(
      (res:any)=>{
        console.log(res.data);
        
        this.allbranch = res.data
      },
      err=>{

      }
    )
  }
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
    // console.log("form submit");
    
    this.spinner.show()
    this.courseservice.add(this.addcourses.value).subscribe(
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
