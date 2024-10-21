import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdoctors',
  templateUrl: './listdoctors.component.html',
  styleUrl: './listdoctors.component.css'
})
export class ListdoctorsComponent {
  obj = [];

  constructor( public serv : DoctorService , public router : Router ){
    this.serv.get().subscribe(  (data : any)=>{
      this.obj = data;
    } );
  }

  
  delete(id:number){
    this.serv.delete(id).subscribe( (data)=>{
      window.location.reload();
    } );
  }
}
