import { Component } from '@angular/core';
import { Doctor } from '../../Models/Doctor';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrl: './editdoctor.component.css'
})
export class EditdoctorComponent {

  id :string = '';
  obj: Doctor = new Doctor();
  constructor(public serv: DoctorService, private router: Router , public active : ActivatedRoute){
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
      if(window.confirm("Are You Sure for Update")){
        this.serv.put( this.id ,  this.obj).subscribe( (data)=>{
          this.router.navigateByUrl('/doctor/list');
        } );
      }


    }
  }


}
