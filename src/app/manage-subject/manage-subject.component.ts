import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { SubjectService } from '../shared/subject/subject.service';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.css']
})
export class ManageSubjectComponent implements OnInit{

  constructor(private subjectservice:SubjectService){}

  ngOnInit(): void {
    this.getallsubject()
  }

  allsubject:any

  getallsubject(){
    this.subjectservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allsubject = res.data
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
        this.subjectservice.block({_id:id,status:false}).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getallsubject()
          }
        )
      }
    });
  }
}
