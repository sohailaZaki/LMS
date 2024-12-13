import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.css'],
})
export class LayoutComponent implements OnInit {
  currentRoute: string = '';
  showSidebar: boolean = true;
  /**
   *
   */
  constructor(private route: Router) {
    this.currentRoute = route.url;

this.route.events.pipe(filter(event=>event instanceof NavigationEnd)).subscribe((event:any)=>{
  this.currentRoute=event.url;
  this.updateSidebarVisability();
})

  }

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
