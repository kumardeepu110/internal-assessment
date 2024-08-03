import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SubjectService } from '../shared/subject/subject.service';
import { DepartmentService } from '../shared/department/department.service';
import { BranchService } from '../shared/branch/branch.service';
import { CoursesService } from '../shared/courses/courses.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  
  addsubject= new FormGroup({
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    subjectName: new FormControl(),
    subjectCode: new FormControl(),
    semester: new FormControl()
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private subjectservice:SubjectService, private departmentservice:DepartmentService, private branchservice:BranchService, private courseservice:CoursesService){}

  ngOnInit(): void {
    this.getalldept()
    this.getallbranch()
    this.getallcourse()
    
  }

  alldept:any
  allbranch:any
  allcourse:any

  getalldept(){
    this.departmentservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.alldept = res.data
      },
      err=>{
        
      }
    )
  }
  getallbranch(){
    this.branchservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allbranch = res.data
      },
      err=>{

      }
    )
  }
  getallcourse(){
    this.courseservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allcourse = res.data
      },
      err=>{

      }
    )
  }

  add(){
    this.spinner.show()
    this.subjectservice.add(this.addsubject.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-subject')
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
