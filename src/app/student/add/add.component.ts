import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from './../../Models/Student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  student: Student = new Student();


  constructor(public serv: StudentService, private router: Router) {}

  addnewStudent(
    name: any,
    age: any,
    address: any,
    level: any,
    gpa: any,
    departmentName: any,
    phone: any,
    email: any,
    gender: any
  ) {
    if (
      name.errors?.['required'] ||
      age.errors?.['required'] ||
      address.errors?.['required'] ||
      level.errors?.['required'] ||
      gpa.errors?.['required'] ||
      departmentName.errors?.['required'] ||
      phone.errors?.['required'] ||
      email.errors?.['required'] ||
      gender.errors?.['required']
    ) {
      window.alert('their is an error ');
    } else {
      this.serv.post(this.student).subscribe((data) => {
        this.router.navigateByUrl('/student/list');
      });
    }
  }

  print(email:any){
    console.log(email);
    
  }
}
