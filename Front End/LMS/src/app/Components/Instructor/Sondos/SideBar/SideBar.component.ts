import { CoursesServices } from './../../Services/Courses.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent implements OnInit {
courses:{title:string}[]=[];
courseServices:CoursesServices =new CoursesServices();
  constructor() { }

  ngOnInit() {
    this.courses = this.courseServices.getCourses();
  }
  isDropdownOpen = false; // Tracks dropdown state
  currentComponent: string = 'to-do'; // Default component

  showComponent(component: string): void {
    this.currentComponent = component;
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
}
}
