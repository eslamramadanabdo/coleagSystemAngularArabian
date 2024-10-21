import { Component } from '@angular/core';
import { Course } from '../../Models/Course';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  obj: Course = new Course();


  constructor(public serv: CourseService, private router: Router) {}

  addnew(
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
      this.serv.post(this.obj).subscribe((data) => {
        this.router.navigateByUrl('/course/list');
      });
    }
  }
}
