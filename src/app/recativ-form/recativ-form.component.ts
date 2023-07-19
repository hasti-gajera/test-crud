import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-recativ-form',
  templateUrl: './recativ-form.component.html',
  styleUrls: ['./recativ-form.component.css']
})
export class RecativFormComponent implements OnInit {
  loginform: FormGroup | any
  constructor(private FormBuilder: FormBuilder, private router:Router) { }


  ngOnInit(): void {
    this.loginform = this.FormBuilder.group({
      name: ['' ,[Validators.required]],
      id: ['']
    })
  }
  get loginformControls() {
    return this.loginform.controls
  }
  submit() {
    if (this.loginform.valid) {
      this.loginform.patchValue({
        id: new Date().getTime(),
      })
      // console.log(this.loginform.value);
    }
    
  }
  click(){
    // console.log();
    // console.log(this.loginform.value.id);
    this.router.navigateByUrl(`form/${this.loginform.value.id}`)
    this.loginform.reset()
  }
}
