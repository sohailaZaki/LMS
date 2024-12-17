import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';  // استيراد Router من Angular

import { UserService } from '../../../Login & Reg/Rahma/services/user.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private userService: UserService) {}  // إضافة الـ Router داخل الـ constructor

  studentName: string = ' ';
  studentNameEnglish: string = ' ';
  Email: string = ' ';
  phoneNumber: string = ' ';

  ngOnInit() {
    const userData = this.userService.getUserData();

    if (userData) {
      this.phoneNumber = userData.userName;
      this.Email = userData.email;
      this.studentName = `${userData.firstName} ${userData.lastName}`;
    }
  }

  /*ngOnInit(): void {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('userData');

    if (userData) {
      const parsedData = JSON.parse(userData);
      this.studentName = parsedData.name || 'Not Available';
      this.Email = parsedData.email || 'Not Available';
      this.phoneNumber = parsedData.phone || 'Not Available';
    }
  }*/

  // التنقل بين الصفحات
  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]); // توجيه الصفحات الفرعية
  }
}
