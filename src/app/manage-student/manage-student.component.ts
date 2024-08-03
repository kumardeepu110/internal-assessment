import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit{

  constructor(private studentservice:StudentService){}

  ngOnInit(): void {
    this.getallstudent()
  }

  allstudent:any

  getallstudent(){
    this.studentservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allstudent = res.data
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
        this.studentservice.block({_id:id,status:false}).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getallstudent()
          }
        )
      }
    });
  }

}
