import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends SharedService<Student> {



  constructor(  public http2 : HttpClient  ) { 
    const url = "http://localhost:3000/students";
    super(http2 ,  url);
  }


}
