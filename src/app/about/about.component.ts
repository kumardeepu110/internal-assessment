import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../shared/dashboard/dashboard.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private router:Router, private authservice:AuthService, private spinner:NgxSpinnerService, private dashboardservice:DashboardService){}
  email:any

  ngOnInit(): void {
    // this.spinner.show()

    if(this.authservice.getEmail()){
      setTimeout(() => {
        this.spinner.hide()
      }, 1000);
    }

    this.getdept()
  }


  allcourse:any
  allsubject:any
  allstudent:any
  allteacher:any

  getdept(){
    this.dashboardservice.dashboard({}).subscribe(
      (res:any)=>{
        this.allcourse = res.totalcourse
        this.allsubject = res.totalsubject
        this.allstudent = res.totalstudent
        this.allteacher = res.totalteacher
      }
    )
  }


}
