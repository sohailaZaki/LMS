import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import{ FirstKeyPipe } from '../../../../app/Rahma/pipes/first-key.pipe'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: false,
  
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})


export class SigninComponent {
   
  signinForm : FormGroup;
  isSubmitted :boolean=false;
  
  constructor(public formbuilder2 : FormBuilder){

    this.signinForm =this.formbuilder2.group({
      email: ['', [Validators.required]],
      password :['', [Validators.required]],
    }
  )
  }

  onSubmit() {
    this.isSubmitted=true;
    console.log(this.signinForm.value);
  }
  
  hasDisplayableError(controlName : string ):Boolean{
    const control= this.signinForm.get(controlName);
    return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched) ||Boolean(control?.dirty));
  }
  
}
