import { Component, OnInit } from '@angular/core';
import { AssignteacherService } from '../shared/assignteacher/assignteacher.service';

@Component({
  selector: 'app-show-class',
  templateUrl: './show-class.component.html',
  styleUrls: ['./show-class.component.css']
})
export class ShowClassComponent implements OnInit{

  constructor(private assignservice:AssignteacherService){}

  ngOnInit(): void {
    this.getassignteacher()
  }

  alldata:any

  getassignteacher(){
    this.assignservice.getall({}).subscribe(
      (res:any)=>{
        this.alldata = res.data
      }
    )
  }

}

