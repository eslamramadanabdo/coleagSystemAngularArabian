
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { ListdoctorsComponent } from './doctor/listdoctors/listdoctors.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';

const routes: Routes = [
  {path: "" , component : HomeComponent },
  {path: "home" , component : HomeComponent },
  {path: "student/list" , component : ListComponent },
  {path: "student/add" , component : AddComponent },
  {path: "student/edit/:id" , component : EditComponent },

  {path: "doctor/list" , component : ListdoctorsComponent },
  {path: "doctor/add" , component : AdddoctorComponent },
  {path: "doctor/edit/:id" , component : EditdoctorComponent },
  

  {path: "course/list" , component : ListCoursesComponent },
  {path: "course/add" , component : AddCourseComponent },
  {path: "course/edit/:id" , component : EditCourseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
