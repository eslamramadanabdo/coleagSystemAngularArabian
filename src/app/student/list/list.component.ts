import { Student } from './../../Models/Student';
import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  
  student = [];

  constructor( public serv : StudentService , public router : Router ){
    this.serv.get().subscribe(  (data : any)=>{
      this.student = data;
    } );
  }
  deleteStudent(id:number){
    this.serv.delete(id).subscribe( (data)=>{
      window.location.reload();
    } );
  }






}
