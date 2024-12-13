import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  username: string = 'Nada';  // اسم المستخدم
  activeRoute: string = ''; // المتغير الذي سيحمل المسار النشط
  private routerSub: Subscription = new Subscription; // للاشتراك في أحداث التنقل

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects.split('/').pop() || ''; // استخراج المسار النشط
      }
    });
  }
  

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  navigateTo(page: string): void {
    this.router.navigate([`/dashboard/${page}`]); 
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
