import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { TeacherService } from '../shared/teacher/teacher.service';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent implements OnInit{

  constructor(private teacherservice:TeacherService){}

  ngOnInit(): void {
    this.getallteacher()
  }

  allteacher:any

  getallteacher(){
    this.teacherservice.getall({status:true}).subscribe(
      (res:any)=>{
        console.log(res.data);
        
        this.allteacher = res.data
      }
    )
  }

  deleteuser(id:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // api call
        this.teacherservice.block({_id:id,status:false}).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getallteacher()
          }
        )
      }
    });
  }

  getdate(d:any){
    let dd = d.split("T")
    return dd[0]
  }
}
