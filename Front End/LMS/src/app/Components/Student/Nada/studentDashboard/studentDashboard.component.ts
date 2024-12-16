import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentDashboard',
  templateUrl: './studentDashboard.component.html',
  styleUrls: ['./studentDashboard.component.css'],
})
export class studentDashboardComponent implements OnInit, OnDestroy {
  username: string = 'Nada'; // اسم المستخدم
  activeRoute: string = '';
  isSidebarCollapsed = false; // حالة الشريط الجانبي
  private routerSub: Subscription = new Subscription();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // تحديث المسار النشط
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects.split('/').pop() || '';
      }
    });

    // تحقق من حجم الشاشة عند بدء التشغيل
    this.updateSidebarState(window.innerWidth);
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  navigateTo(page: string): void {
    this.router.navigate([`/student-dashboard/${page}`]);
    this.closeSidebar(); // إغلاق الشريط الجانبي عند التنقل
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // مستمع لتغيير حجم الشاشة
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateSidebarState(event.target.innerWidth);
  }

  private updateSidebarState(width: number): void {
    // إذا كانت الشاشة صغيرة، أغلق الشريط الجانبي تلقائيًا
    this.isSidebarCollapsed = width <= 768;
  }

  // إغلاق الشريط الجانبي عند الضغط على رابط
  closeSidebar(): void {
    if (window.innerWidth <= 768) {
      this.isSidebarCollapsed = true;
    }
  }
}
