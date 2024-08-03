import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/marks/marks.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-internal-assessment-view',
  templateUrl: './internal-assessment-view.component.html',
  styleUrls: ['./internal-assessment-view.component.css']
})
export class InternalAssessmentViewComponentimplements implements OnInit{

  constructor(private marksservice:MarksService,private authservice : AuthService){}

  ngOnInit(): void {
    this.getmarks()
  }

  allmarks:any

  getmarks(){
    console.log({studentId:this.authservice.getstudentId()})
    this.marksservice.getbystudent({studentId:this.authservice.getstudentId()}).subscribe(
      (res:any)=>{
        this.allmarks = res.data
      }
    )
  }
}
