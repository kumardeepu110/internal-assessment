import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CoursesService } from '../shared/courses/courses.service';
import { DepartmentService } from '../shared/department/department.service';
import { BranchService } from '../shared/branch/branch.service';
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  
  updatestudent= new FormGroup({
    _id: new FormControl(),
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    studentName: new FormControl(),
    studentEmail: new FormControl(),
    section: new FormControl(),
    roll_no: new FormControl(),
    university_roll_no: new FormControl()
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private courseservice:CoursesService, private deptservice:DepartmentService, private branchservice:BranchService, private studentservice:StudentService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.updatestudent.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getdept()
    this.getbranch()
    this.getcourse()
    this.getstudent()
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

  allcourse:any

  getcourse(){
    this.courseservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allcourse = res.data
      }
    )
  }


  getstudent(){
    this.studentservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updatestudent.patchValue({'departmentId':res.data.departmentId._id})
        this.updatestudent.patchValue({'branchId':res.data.branchId._id})
        this.updatestudent.patchValue({'courseId':res.data.courseId._id})
        this.updatestudent.patchValue({'studentName':res.data.studentName})
        this.updatestudent.patchValue({'studentEmail':res.data.studentEmail})
        this.updatestudent.patchValue({'section':res.data.section})
        this.updatestudent.patchValue({'roll_no':res.data.roll_no})
        this.updatestudent.patchValue({'university_roll_no':res.data.university_roll_no})
      }
    )
  }

  update(){
    this.spinner.show()
    this.studentservice.update(this.updatestudent.value).subscribe(
      (res:any)=>{
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
