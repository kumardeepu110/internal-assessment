import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../shared/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private toastr:ToastrService, private spinner:NgxSpinnerService, private dashboardservices:DashboardService){}

  ngOnInit(): void {
    this.getdept()
  }

  alldept:any
  allbranch:any
  allcourse:any
  allsubject:any
  allstudent:any
  allteacher:any

  getdept(){
    this.dashboardservices.dashboard({}).subscribe(
      (res:any)=>{
        this.alldept = res.totalDepartment
        this.allbranch = res.totalbranch
        this.allcourse = res.totalcourse
        this.allsubject = res.totalsubject
        this.allstudent = res.totalstudent
        this.allteacher = res.totalteacher
      }
    )
  }

}
