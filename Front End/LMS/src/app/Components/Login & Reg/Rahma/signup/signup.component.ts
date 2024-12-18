import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',

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
  constructor(public formbuilder : FormBuilder  , private auth: AuthService, private userService: UserService, private router: Router){

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
          this.router.navigate(['/Login']);
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
      this.showMessage('Please fill out the form correctly.', 'error');
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


  showMessage(message: string, type: 'success' | 'error') {
    const messageDiv = document.createElement('div');
  
    // Dynamically style background and icon
    const backgroundColor = type === 'success' ? '#4CAF50' : '#F44336'; // Green for success, Red for error
    const icon = type === 'success' 
      ? '<span style="color: #fff;">✅</span>' 
      : '<span style="color: #fff;">⚠️</span>'; // Make icons explicitly white
  
    messageDiv.innerHTML = `
      <div style="
        padding: 15px;
        background-color: ${backgroundColor};
        color: white;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 16px;
        text-align: center;
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px; /* Space between icon and text */
      ">
        ${icon} ${message}
      </div>
    `;
    document.body.appendChild(messageDiv);
  
    // Remove the message after 5 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 10000);
  }

  hasDisplayableError(controlName : string ):Boolean{
       const control= this.signupForm.get(controlName);
       return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched));
  }
}
