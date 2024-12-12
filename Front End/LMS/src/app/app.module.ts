import { InstructorDashBoardComponent } from './Components/Sohaila/instructorDashBoard/instructorDashBoard.component';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzCardModule } from 'ng-zorro-antd/card';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SideBarComponent } from './Components/Sondos/SideBar/SideBar.component';
import { CoursesComponent } from './Components/Sondos/Courses/Courses.component';
import { DashboardComponent } from './Components/nada/dashboard/dashboard.component';
import { CourseDetailsComponent } from './Components/nada/course-detail/course-detail.component';
import { SubmissionAssignmentComponent } from './Components/nada/submission-assignment/submission-assignment.component';
import { HomeComponent } from './Components/nada/home/home.component';
import { CourseMaterialsComponent } from './Components/nada/course-materials/course-materials.component';
const routes: Routes=[{
  path:'InstructorDashBoard',component:InstructorDashBoardComponent},
  {path:'Instructor/Courses',component:CoursesComponent },


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'courses', component: CourseMaterialsComponent },
      { path: 'assignments', component: SubmissionAssignmentComponent },
      { path: 'home', component: HomeComponent },
      { path: 'course-detail/:id', component: CourseDetailsComponent }
    ],
  },
]
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,InstructorDashBoardComponent,SideBarComponent, DashboardComponent, CourseDetailsComponent, SubmissionAssignmentComponent, HomeComponent, CourseMaterialsComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule, IconsProviderModule, NzLayoutModule, NzMenuModule, FormsModule,NzCardModule,MatListModule,NzListItemComponent,NzListComponent,NzButtonComponent,
    RouterModule.forRoot(routes)
  ],

  providers: [
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
exports:[
  RouterModule
]
})
export class AppModule { }
