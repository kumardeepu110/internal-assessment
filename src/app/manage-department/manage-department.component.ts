import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { DepartmentService } from '../shared/department/department.service';

@Component({
  selector: 'app-manage-department',
  templateUrl: './manage-department.component.html',
  styleUrls: ['./manage-department.component.css']
})
export class ManageDepartmentComponent implements OnInit{
  constructor(private departmentservice:DepartmentService){}

  ngOnInit(): void {
    this.getalldept()
  }

  alldept:any

  getalldept(){
    this.departmentservice.getall({status:true}).subscribe(
      (res:any)=>{
        console.log(res.data);
        this.alldept = res.data
      },
      err=>{
        
      }
    )
  }

  deletedept(id:any){
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
        this.departmentservice.block({_id:id,status:false}).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.getalldept()
          }
        )
      }
    });
  }
}
