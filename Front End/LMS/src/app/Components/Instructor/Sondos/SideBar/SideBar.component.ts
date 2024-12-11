import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
