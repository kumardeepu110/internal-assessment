import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/marks/marks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-internal',
  templateUrl: './view-internal.component.html',
  styleUrls: ['./view-internal.component.css']
})
export class ViewInternalComponent implements OnInit{

  constructor(private marksservice:MarksService){}

  ngOnInit(): void {
    this.getmarks()
  }

  allmarks:any

  getmarks(){
    this.marksservice.getall({status:true}).subscribe(
      (res:any)=>{
        this.allmarks = res.data
      }
    )
  }

  // deleteuser(id:any){
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // api call
  //       this.marksservice.block({_id:id,status:false}).subscribe(
  //         (res:any)=>{
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your file has been deleted.",
  //             icon: "success"
  //           });
  //           this.getmarks()
  //         }
  //       )
  //     }
  //   });
  // }
}

