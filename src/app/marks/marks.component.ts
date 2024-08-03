import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MarksService } from '../shared/marks/marks.service';
import { DepartmentService } from '../shared/department/department.service';
import { BranchService } from '../shared/branch/branch.service';
import { CoursesService } from '../shared/courses/courses.service';
import { SubjectService } from '../shared/subject/subject.service';
import { StudentService } from '../shared/student/student.service';
import { TeacherService } from '../shared/teacher/teacher.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit{

  
  addmarks= new FormGroup({
    departmentId:new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    subjectId: new FormControl(),
    semester: new FormControl(),
    teacherId: new FormControl(),
    studentId: new FormControl(),
    section: new FormControl(),
    roll_no: new FormControl(),
    university_roll_no: new FormControl(),
    marks_type: new FormControl(),
    marks: new FormControl(),
    attendance: new FormControl(),
    mst: new FormControl(),
    assignment: new FormControl(),
    total_marks: new FormControl()
    
  })

  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private marksservice:MarksService, private departmentservice:DepartmentService, private branchservice:BranchService, private courseservice:CoursesService, private subjectservice:SubjectService, private studentservice:StudentService, private teacherservice:TeacherService){}
  
  ngOnInit(): void {
    this.getdept()
    this.getbranch()
    this.getcourse()
    this.getsubject()
    this.getstudent()
    this.getteacher()
  }

  alldept:any
  allbranch:any
  allcourse:any
  allsubject:any

  getdept(){
    this.departmentservice.getall({}).subscribe(
      (res:any)=>{
        this.alldept = res.data
      }
    )
  }
  getbranch(){
    this.branchservice.getall({}).subscribe(
      (res:any)=>{
        this.allbranch = res.data
      }
    )
  }
  getcourse(){
    this.courseservice.getall({}).subscribe(
      (res:any)=>{
        this.allcourse = res.data
      }
    )
  }
  getsubject(){
    this.subjectservice.getall({}).subscribe(
      (res:any)=>{
        this.allsubject = res.data
      }
    )
  }

  allstudent:any

  getstudent(){
    this.studentservice.getall({}).subscribe(
      (res:any)=>{
        this.allstudent = res.data
      }
    )
  }
  
  allteacher:any

  getteacher(){
    this.teacherservice.getall({}).subscribe(
      (res:any)=>{
        this.allteacher = res.data
      }
    )
  }
  

  add(){
    this.spinner.show()
    this.marksservice.add(this.addmarks.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-marks')
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
