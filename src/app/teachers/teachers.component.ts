import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from '../shared/teacher/teacher.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit{

  
  addteacher= new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    qualification: new FormControl(),
    designation: new FormControl(),
    date_of_joining: new FormControl(),
    experience: new FormControl()
  })
  
  constructor(private teacherservice:TeacherService, private spinner:NgxSpinnerService, private toastr:ToastrService, private router:Router){}

  ngOnInit(): void {
    
  }
  add(){
    this.spinner.show()
    this.teacherservice.add(this.addteacher.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/manage-teacher')
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
