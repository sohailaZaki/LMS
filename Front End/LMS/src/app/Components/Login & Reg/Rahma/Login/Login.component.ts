// import { FirstKeyPipe } from './../../../../Rahma/pipes/first-key.pipe';
import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-:Login',
  standalone: false,

  templateUrl: './Login.component.html',
  styleUrl: './Login.component.css'
})


export class LoginComponent {

  signinForm : FormGroup;
  isSubmitted :boolean=false;

  constructor(public formbuilder2 : FormBuilder , private auth : AuthService, private userService: UserService, private router: Router){

    this.signinForm =this.formbuilder2.group({
      email: ['', [Validators.required]],
      password :['', [Validators.required]],
    }
  )
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const loginData = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
      };
  
      this.auth.login(loginData).subscribe({
        next: (res) => {
          console.log('Login Response:', res);
  
          // Check if the response has a 'Message' indicating an issue with the account status
          if (res.Message && res.Message.includes("Account status")) {
            // Display the error message from the backend (e.g., "Account status 'pending' does not allow login.")
            this.showMessage(res.Message, 'error');
            return; // Stop further execution since the account can't log in yet
          }
  
          // Proceed to handle login based on role
          if (res.roleName.toLowerCase() === 'student') {
            // Save user data in the service
            this.userService.setUserData({
              email: res.email,
              userName: res.userName,
              firstName: res.firstName,
              lastName: res.lastName,
              roleName: res.roleName, // Save the role as well
            });
  
            // Navigate to student dashboard
            this.router.navigate(['/student-dashboard/home']);
          } else if (res.roleName.toLowerCase() === 'instructor') {
            this.router.navigate(['/instructor/InstructorDashBoard']);
          } else if (res.roleName.toLowerCase() === 'admin') {
            this.router.navigate(['/admin/dashboard']);
            // Handle admin logic here
          }
        },
        error: (err) => {
          console.error('Error:', err);
  
          // If the error has a message (like 'Invalid credentials' or other messages from the backend)
          const errorMessage = err?.error?.message || 'Login failed due to an unknown error.';
          this.showMessage(errorMessage, 'error');
        },
      });
    }
  }
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
    }, 5000);
  }
  hasDisplayableError(controlName : string ):Boolean{
    const control= this.signinForm.get(controlName);
    return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched) ||Boolean(control?.dirty));
  }

}
