import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentService } from '../shared/student/student.service';
import { CoursesService } from '../shared/courses/courses.service';
import { BranchService } from '../shared/branch/branch.service';
import { DepartmentService } from '../shared/department/department.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  
  addstudent= new FormGroup({
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    studentName: new FormControl(),
    studentEmail: new FormControl(),
    studentPassword: new FormControl(),
    section: new FormControl(),
    roll_no: new FormControl(),
    university_roll_no:new FormControl()
  })
  
  constructor(private router:Router, private toastr: ToastrService, private spinner: NgxSpinnerService, private studentservice:StudentService, private courseservice:CoursesService, private branchservice:BranchService, private deptservice:DepartmentService){}

  ngOnInit(): void {
    this.getalldept()
    this.getallbranch()
    this.getallcourse()
  }

  alldept:any
  allbranch:any
  allcourse:any

  getalldept(){
    this.deptservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.alldept = res.data
      }
    )
  }
  getallbranch(){
    this.branchservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allbranch = res.data
      }
    )
  }
  getallcourse(){
    this.courseservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allcourse = res.data
      }
    )
  }

  add(){
    this.spinner.show()
    this.studentservice.add(this.addstudent.value).subscribe(
      (res:any)=>{
        console.log(res.message);
        
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-student')
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
