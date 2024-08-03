import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AssignteacherService } from '../shared/assignteacher/assignteacher.service';

@Component({
  selector: 'app-manage-assign-sub-to-staff',
  templateUrl: './manage-assign-sub-to-staff.component.html',
  styleUrls: ['./manage-assign-sub-to-staff.component.css']
})
export class ManageAssignSubToStaffComponent implements OnInit{

  constructor(private assignservice:AssignteacherService){}

  ngOnInit(): void {
    this.getassignteacher()
  }

  alldata:any

  getassignteacher(){
    this.assignservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.alldata = res.data
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
        this.assignservice.block({_id:id,status:false}).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getassignteacher()
          }
        )
      }
    });
  }

}
