import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './CustomReuseStrategy';
import { FormsModule } from '@angular/forms';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { ListdoctorsComponent } from './doctor/listdoctors/listdoctors.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    AdddoctorComponent,
    EditdoctorComponent,
    ListdoctorsComponent,
    AddCourseComponent,
    EditCourseComponent,
    ListCoursesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
