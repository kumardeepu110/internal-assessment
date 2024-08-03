import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { CoursesService } from '../shared/courses/courses.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit{

  constructor(private courseservice:CoursesService){}

  ngOnInit(): void {
    this.getallcourses()
  }

  allcourse :any

  getallcourses(){
    this.courseservice.getall({status:true}).subscribe(
      (res:any)=>{
        console.log(res.data);
        
        this.allcourse = res.data
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
        this.courseservice.block({_id:id,status:false}).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getallcourses()
          }
        )
      }
    });
  }

}
