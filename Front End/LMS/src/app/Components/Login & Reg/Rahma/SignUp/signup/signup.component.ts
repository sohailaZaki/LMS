import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FirstKeyPipe } from '../../pipes/first-key.pipe';


@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  ///^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  isSubmitted:boolean=false;

  passwordmatchvalidator : ValidatorFn = (control:AbstractControl):null=>{
    const password=control.get('password')
    const confirmPassword =control.get('confirmPassword')
    if(password && confirmPassword && password.value != confirmPassword.value)
      confirmPassword?.setErrors({passwordmissmatch:true})
    else
    confirmPassword?.setErrors(null)

     return null;
  }
  signupForm: FormGroup;
  constructor(public formbuilder : FormBuilder){

   this.signupForm = this.formbuilder.group({

    firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(20) ,Validators.pattern(/(?=.*[^a-zA-Z0-9])/)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
    },{validators:this.passwordmatchvalidator}
  )
  }



  onSubmit() {
    this.isSubmitted =true;
   if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert("Successfully registeration!!")
    } else {
      console.error('Form is invalid');
    }
  }

  hasDisplayableError(controlName : string ):Boolean{
       const control= this.signupForm.get(controlName);
       return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched));
  }
}
