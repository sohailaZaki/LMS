import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  }

}
