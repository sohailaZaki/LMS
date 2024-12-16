import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FirstKeyPipe } from '../../pipes/first-key.pipe';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


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
  constructor(public formbuilder : FormBuilder , private auth: AuthService, private userService: UserService, private router: Router ){

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

  /*onSubmit() {
    this.isSubmitted = true;
  
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;
  
      // Map the role to RoleID and RoleName
      let roleID: number;
      let roleName: string;
  
      switch (formValues.role) {
        case 'Admin':
          roleID = 3;
          roleName = 'Admin';
          break;
        case 'Instructor':
          roleID = 2;
          roleName = 'Instructor';
          break;
        case 'Student':
          roleID = 1;
          roleName = 'Student';
          break;
        default:
          console.warn(`Unexpected role value: ${formValues.role}`);
          roleID = 1; // Defaulting to Student
          roleName = 'Student';
          break;
      }
  
      // Password and Confirm Password Validation
      if (formValues.password !== formValues.confirmPassword) {
        this.showMessage('Passwords do not match', 'error');
        return;
      }
  
      // Create the object that matches the backend model
      const userDto = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
        roleID: roleID,
        roleName: roleName,  // Send the role as a string
        createdAt: new Date().toISOString()  // Current date for CreatedAt
      };
  
      this.auth.signUp(userDto).subscribe({
        next: () => {
          // Show success message
          this.showMessage('Successfully Registered! Wait for your approval', 'success');
          this.signupForm.reset();
        },
        error: (err) => {
          // Show error message
          const errorMessage = err?.error?.message || 'Registration Failed';
          this.showMessage(errorMessage, 'error');
        }
      });
  
      console.log(userDto); // Log the mapped userDto for debugging
  
    } else {
      console.error('Form is invalid');
    }
  }
  

  /*onSubmit() {
    this.isSubmitted =true;
   if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert("Successfully registeration!!")
    } else {
      console.error('Form is invalid');
    }
  }*/
   

  hasDisplayableError(controlName : string ):Boolean{
       const control= this.signupForm.get(controlName);
       return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched));
  }
}
