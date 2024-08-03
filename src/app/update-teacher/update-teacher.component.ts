import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from '../shared/teacher/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{

  
  updateteacher= new FormGroup({
    _id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    qualification: new FormControl(),
    designation: new FormControl(),
    date_of_joining: new FormControl(),
    experience: new FormControl()
  })
  
  constructor(private teacherservice:TeacherService, private activatedroute:ActivatedRoute, private router:Router, private toastr:ToastrService, private spinner:NgxSpinnerService){}

  ngOnInit(): void {
    this.updateteacher.patchValue({'_id':this.activatedroute.snapshot.paramMap.get("_id")})
    this.getsingledata()
  }

  getsingledata(){
    this.teacherservice.getsingle({_id:this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.updateteacher.patchValue({'name':res.data.name})
        this.updateteacher.patchValue({'email':res.data.email})
        this.updateteacher.patchValue({'password':res.data.password})
        this.updateteacher.patchValue({'qualification':res.data.qualification})
        this.updateteacher.patchValue({'designation':res.data.designation})
        this.updateteacher.patchValue({'date_of_joining':res.data.date_of_joining})
        this.updateteacher.patchValue({'experience':res.data.experience})
      },
      err=>{

      }
    )
  }

  update(){
    this.spinner.show()
    this.teacherservice.update(this.updateteacher.value).subscribe(
      (res:any)=>{
        this.spinner.hide()
        if(res.success){
          this.toastr.success(res.message)
          this.router.navigateByUrl("/layout/manage-teacher")
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
