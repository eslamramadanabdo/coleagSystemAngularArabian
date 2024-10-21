import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { Course } from '../Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends SharedService<Course> {

  constructor( private http2 : HttpClient ) {
      super(http2 , "http://localhost:3000/courses")
   }
   
}
