import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  private userData: any = null;

  setUserData(data: any) {
    this.userData = data;
    // Store the user data in localStorage or sessionStorage
    localStorage.setItem('user', JSON.stringify(data));  // Save user data in localStorage
  }

  getUserData() {
    if (!this.userData) {
      this.userData = JSON.parse(localStorage.getItem('user') || '{}');  // Get data from localStorage
    }
    return this.userData;
  }

  clearUserData() {
    this.userData = null;
    localStorage.removeItem('user');  // Clear user data from localStorage
  }
}
