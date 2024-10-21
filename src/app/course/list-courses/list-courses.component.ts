import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {
  obj = [];

  constructor( public serv : CourseService , public router : Router ){
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
