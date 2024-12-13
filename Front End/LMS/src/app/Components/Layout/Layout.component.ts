import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.css']
})
export class LayoutComponent implements OnInit {
  showSidebar:boolean=true;
  /**
   *
   */
  constructor(private route:Router) {
    if(route.url.includes('Login' || route.url.includes('signup'))){
      this.showSidebar=false;
    }
    else{
      this.showSidebar=true;
    }
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
