import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InstructorDashBoardComponent } from './Components/Instructor/Sohaila/instructorDashBoard/instructorDashBoard.component';
import { SideBarComponent } from './Components/Instructor/Sondos/SideBar/SideBar.component';
import { CoursesComponent } from './Components/Instructor/Sondos/Courses/Courses.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { CreateCourseComponent } from './Components/Instructor/Sondos/CreateCourse/create-course.component';
import { StudentDashboardComponent } from './Components/Student/Nada/studentDashboard/studentDashboard.component';
import { LoginComponent } from './Components/Login & Reg/Rahma/Login/Login.component';
import { CourseViewComponent } from './Components/Instructor/Sohaila/courseView/courseView.component';


import { MatCardModule } from '@angular/material/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
=======
import { MatCardModule } from '@angular/material/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
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


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';  // إضافة هذه الوحدة
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';  // إضافة هذه الوحدة
import { MatIconModule } from '@angular/material/icon';  // إضافة هذه الوحدة الخاصة بـ Material Icons
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Components/Login & Reg/Rahma/SignUp/signup/signup.component';
import { FirstKeyPipe } from './Components/Login & Reg/Rahma/pipes/first-key.pipe';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'InstructorDashBoard', component: InstructorDashBoardComponent },
    { path: 'Instructor/Courses', component: CoursesComponent },
    { path: 'Instructor/Courses/:id', component: CourseViewComponent },
    { path: 'Instructor/Grades', component: CoursesComponent },
    { path: 'Instructor/Assigments', component: CoursesComponent },
    { path: 'Instructor/Assigments/AddNew', component: CreateCourseComponent },
    { path: 'Instructor/Courses/New', component: CreateCourseComponent },

    { path: '', redirectTo: '/Login', pathMatch: 'full' },

    { path: '', redirectTo: '/signin', pathMatch: 'full' },

    { path: 'Login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    InstructorDashBoardComponent,
    SideBarComponent,
    CoursesComponent,
    LayoutComponent,
    CreateCourseComponent,
    StudentDashboardComponent,
    SignupComponent,
    CourseViewComponent,
    LoginComponent,
    FirstKeyPipe,




  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzCardModule,  // تأكد من إضافتها
    NzDropDownModule,  // تأكد من إضافتها
    MatIconModule,  // تأكد من إضافتها
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
