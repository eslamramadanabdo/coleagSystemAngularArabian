import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Doctor } from '../Models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends SharedService<Doctor> {

  
  constructor(  public http2 : HttpClient  ) { 
    const url = "http://localhost:3000/doctors";
    super(http2 ,  url);
  }


  

  
}
