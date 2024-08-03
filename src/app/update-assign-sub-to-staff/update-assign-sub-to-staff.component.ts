import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignteacherService } from '../shared/assignteacher/assignteacher.service';
import { DepartmentService } from '../shared/department/department.service';
import { BranchService } from '../shared/branch/branch.service';
import { CoursesService } from '../shared/courses/courses.service';
import { SubjectService } from '../shared/subject/subject.service';
import { TeacherService } from '../shared/teacher/teacher.service';

@Component({
  selector: 'app-update-assign-sub-to-staff',
  templateUrl: './update-assign-sub-to-staff.component.html',
  styleUrls: ['./update-assign-sub-to-staff.component.css']
})
export class UpdateAssignSubToStaffComponent implements OnInit{

  
  updateassign= new FormGroup({
    _id: new FormControl(),
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    subjectId: new FormControl(),
    semester: new FormControl(),
    teacherId: new FormControl()
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private assignservice:AssignteacherService, private deptservice:DepartmentService, private branchservice:BranchService, private courseservice: CoursesService,private subjectservice:SubjectService, private teacherservice:TeacherService, private actvitedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.updateassign.patchValue({'_id':this.actvitedroute.snapshot.paramMap.get('_id')})
    this.getdept()
    this.getbranch()
    this.getcourse()
    this.getsubject()
    this.getteacher()
    this.getassignteacher()
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

  allsubject:any

  getsubject(){
    this.subjectservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allsubject = res.data
      }
    )
  }

  allteacher:any

  getteacher(){
    this.teacherservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allteacher = res.data
      }
    )
  }

  getassignteacher(){
    this.assignservice.getsingle({_id:this.actvitedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updateassign.patchValue({'departmentId':res.data.departmentId._id})
        this.updateassign.patchValue({'branchId':res.data.branchId._id})
        this.updateassign.patchValue({'courseId':res.data.courseId._id})
        this.updateassign.patchValue({'subjectId':res.data.subjectId._id})
        this.updateassign.patchValue({'semester':res.data.semester._id})
        this.updateassign.patchValue({'teacherId':res.data.teacherId._id})
      }
    )
  }

  update(){
    this.spinner.show()
    this.assignservice.update(this.updateassign.value).subscribe(
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
