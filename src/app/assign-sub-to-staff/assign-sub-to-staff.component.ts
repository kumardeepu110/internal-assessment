import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignteacherService } from '../shared/assignteacher/assignteacher.service';
import { DepartmentService } from '../shared/department/department.service';
import { BranchService } from '../shared/branch/branch.service';
import { CoursesService } from '../shared/courses/courses.service';
import { SubjectService } from '../shared/subject/subject.service';
import { TeacherService } from '../shared/teacher/teacher.service';

@Component({
  selector: 'app-assign-sub-to-staff',
  templateUrl: './assign-sub-to-staff.component.html',
  styleUrls: ['./assign-sub-to-staff.component.css']
})
export class AssignSubToStaffComponent implements OnInit{

  
  assignteacher= new FormGroup({
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    teacherId: new FormControl(),
    subjectId: new FormControl(),
    semester: new FormControl()
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private assignteacherservice:AssignteacherService, private departmentservice:DepartmentService, private branchservice:BranchService, private courseservice:CoursesService, private subjectservice:SubjectService, private teacherservice:TeacherService){}

  ngOnInit(): void {
    this.getdept()
    this.getbranch()
    this.getcourse()
    this.getsubject()
    this.getteacher()
  }

  alldept:any
  allbranch:any
  allcourse:any
  allsubject:any
  allteacher:any

  getdept(){
    this.departmentservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.alldept = res.data
      },
      err=>{

      }
    )
  }

  getbranch(){
    this.branchservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allbranch = res.data
      },
      err=>{

      }
    )
  }
  getcourse(){
    this.courseservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allcourse = res.data
      },
      err=>{

      }
    )
  }
  getsubject(){
    this.subjectservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allsubject = res.data
      },
      err=>{

      }
    )
  }
  getteacher(){
    this.teacherservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allteacher = res.data
      },
      err=>{

      }
    )
  }
  
  assign(){
    this.spinner.show()
    this.assignteacherservice.add(this.assignteacher.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-assign-staff')
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
