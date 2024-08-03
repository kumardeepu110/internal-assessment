import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../shared/branch/branch.service';
import { CoursesService } from '../shared/courses/courses.service';
import { DepartmentService } from '../shared/department/department.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubjectService } from '../shared/subject/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit{

  
  updatesubject= new FormGroup({
    _id: new FormControl(),
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    subjectName: new FormControl(),
    subjectCode: new FormControl(),
    semester: new FormControl()
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private courseservice:CoursesService, private deptservice:DepartmentService, private branchservice:BranchService, private subjectservice:SubjectService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.updatesubject.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getdept()
    this.getbranch()
    this.getcourse()
    this.getsubject()
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


  getsubject(){
    this.subjectservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updatesubject.patchValue({'departmentId':res.data.departmentId._id})
        this.updatesubject.patchValue({'branchId':res.data.branchId._id})
        this.updatesubject.patchValue({'courseId':res.data.courseId._id})
        this.updatesubject.patchValue({'subjectName':res.data.subjectName})
        this.updatesubject.patchValue({'subjectCode':res.data.subjectCode})
        this.updatesubject.patchValue({'semester':res.data.semester})
      }
    )
  }

  update(){
    this.spinner.show()
    this.subjectservice.update(this.updatesubject.value).subscribe(
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
