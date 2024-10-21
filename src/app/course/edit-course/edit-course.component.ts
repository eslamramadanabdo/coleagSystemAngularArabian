import { Component } from '@angular/core';
import { Course } from '../../Models/Course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {

  id :string = '';
  obj: Course = new Course();
  constructor(public serv: CourseService, private router: Router , public active : ActivatedRoute){
    const getID = this.active.snapshot.paramMap.get('id'); 
    if(  getID !== null ){
      this.id = getID;
      this.serv.getById(this.id).subscribe( (data :any)=>{
        this.obj = data;
      } );


    }
  }


  editnew(
    name: any,
    hours: any,
    grade: any,
    level: any,
    departmentName: any
  ) {
    if (
      name.errors?.['required'] ||
      hours.errors?.['required'] ||
      grade.errors?.['required'] ||
      level.errors?.['required'] ||
      departmentName.errors?.['required']
    ) {
      window.alert('their is an error ');
    } else {
      if(window.confirm("Are You Sure for Update")){
        this.serv.put( this.id ,  this.obj).subscribe( (data)=>{
          this.router.navigateByUrl('/course/list');
        } );
      }


    }
  }


}
