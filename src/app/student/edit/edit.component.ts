import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Student } from '../../Models/Student';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  id :string = '';
  student: Student = new Student();
  constructor(public serv: StudentService, private router: Router , public active : ActivatedRoute){
    const getID = this.active.snapshot.paramMap.get('id'); 
    if(  getID !== null ){
      this.id = getID;
      this.serv.getById(this.id).subscribe( (data :any)=>{
        this.student = data;
      } );


    }
  }


  editnewStudent(
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
      // this.serv.post(this.student).subscribe((data) => {
      //   this.router.navigateByUrl('/student/list');
      // });

      if(window.confirm("Are You Sure for Update")){
        this.serv.put( this.id ,  this.student).subscribe( (data)=>{
          this.router.navigateByUrl('/student/list');
        } );
      }


    }
  }

  print(email:any){
    console.log(email);
    
  }

}
