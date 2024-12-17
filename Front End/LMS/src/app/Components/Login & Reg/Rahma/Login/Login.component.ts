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

            // Check the role first before proceeding
          if (res.roleName.toLowerCase() === 'student') {
             // Save user data in the service
              this.userService.setUserData({
                email: res.email,
                userName: res.userName,
                firstName: res.firstName,
                lastName: res.lastName,
                roleName: res.roleName // Save the role as well
              });

            // Navigate to student dashboard
            this.router.navigate(['/student-dashboard/home']);
          }else if(res.roleName.toLowerCase() === 'instructor'){

            this.router.navigate(['/instructor/InstructorDashBoard']);

          }else if(res.roleName.toLowerCase() === 'admin'){

          }
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Invalid credentials or an error occurred.');
        },
      });
    }
  }


  hasDisplayableError(controlName : string ):Boolean{
    const control= this.signinForm.get(controlName);
    return Boolean(control?.invalid) &&(this.isSubmitted || Boolean(control?.touched) ||Boolean(control?.dirty));
  }

}
