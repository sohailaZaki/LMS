import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.currentRoute = this.route.url;
    this.updateSidebarVisability();
  }
  updateSidebarVisability() {
    if (
      this.currentRoute.includes('Login') ||
      this.currentRoute.includes('signup')
    ) {
      this.showSidebar = false;
    } else {
      this.showSidebar = true;
    }
  }

}
