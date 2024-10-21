import { Component } from '@angular/core';
import { Doctor } from '../../Models/Doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrl: './adddoctor.component.css'
})
export class AdddoctorComponent {


  obj: Doctor = new Doctor();


  constructor(public serv: DoctorService, private router: Router) {}

  addnew(
    name: any,
    age: any,
    address: any,
    departmentName: any,
    phone: any,
    email: any,
    gender: any
  ) {
    if (
      name.errors?.['required'] ||
      age.errors?.['required'] ||
      address.errors?.['required'] ||
      departmentName.errors?.['required'] ||
      phone.errors?.['required'] ||
      email.errors?.['required'] ||
      gender.errors?.['required']
    ) {
      window.alert('their is an error ');
    } else {
      this.serv.post(this.obj).subscribe((data) => {
        this.router.navigateByUrl('/doctor/list');
      });
    }
  }


}
