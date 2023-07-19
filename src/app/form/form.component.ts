import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  loginform:FormGroup|any
   constructor(private formbulider:FormBuilder){}

  ngOnInit(): void {
     this.loginform = this.formbulider.group({
      username:[''],
      email:[''],
      password:['']
     })
  }
  submit(){
    console.log(this.loginform.value);
    
  }
}
