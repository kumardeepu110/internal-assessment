import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-update-marks',
  templateUrl: './update-marks.component.html',
  styleUrls: ['./update-marks.component.css']
})
export class UpdateMarksComponent implements OnInit{

  
  updatemarks= new FormGroup({
    _id: new FormControl(),
    departmentId: new FormControl(),
    branchId: new FormControl(),
    courseId: new FormControl(),
    semester: new FormControl(),
    subjectId: new FormControl(),
    teacherId: new FormControl(),
    studentId: new FormControl(),
    section: new FormControl(),
    roll_no: new FormControl(),
    marks: new FormControl(),
    attendance: new FormControl(),
    mst: new FormControl(),
    assignment: new FormControl(),
    total_marks: new FormControl(),
  })
  
  constructor(private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService, private activatedroute:ActivatedRoute, private marksservice:MarksService, private deptservice:DepartmentService, private branchservice:BranchService, private courseservice:CoursesService, private subjectservice:SubjectService, private studentservice:StudentService, private teacherservice:TeacherService){}

  ngOnInit(): void {
    this.updatemarks.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getdept()
    this.getbranch()
    this.getcourse()
    this.getsubject()
    this.getstudent()
    this.getteacher()
    this.getmarks()
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

  allstudent:any

  getstudent(){
    this.studentservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allstudent = res.data
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

  getmarks(){
    this.marksservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updatemarks.patchValue({'departmentId':res.data.departmentId._id})
        this.updatemarks.patchValue({'branchId':res.data.branchId._id})
        this.updatemarks.patchValue({'courseId':res.data.courseId._id})
        this.updatemarks.patchValue({'subjectId':res.data.subjectId._id})
        this.updatemarks.patchValue({'semester':res.data.semester._id})
        this.updatemarks.patchValue({'teacherId':res.data.teacherId._id})
        this.updatemarks.patchValue({'studentId':res.data.studentId._id})
        this.updatemarks.patchValue({'section':res.data.section._id})
        this.updatemarks.patchValue({'roll_no':res.data.roll_no._id})
        this.updatemarks.patchValue({'marks':res.data.marks})
        this.updatemarks.patchValue({'attendance':res.data.attendance})
        this.updatemarks.patchValue({'mst':res.data.mst})
        this.updatemarks.patchValue({'assignment':res.data.assignment})
        this.updatemarks.patchValue({'total_marks':res.data.total_marks})
      }
    )
  }

  update(){
    this.spinner.show()
    this.marksservice.update(this.updatemarks.value).subscribe(
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
