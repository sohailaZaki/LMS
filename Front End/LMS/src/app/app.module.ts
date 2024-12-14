
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Ng-Zorro Modules
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/Login & Reg/Rahma/signup/signup.component';
import { LoginComponent } from './Components/Login & Reg/Rahma/Login/Login.component';
import { InstructorDashBoardComponent } from './Components/Instructor/Sohaila/instructorDashBoard/instructorDashBoard.component';
import { SideBarComponent } from './Components/Instructor/Sondos/SideBar/SideBar.component';
import { CoursesComponent } from './Components/Instructor/Sondos/Courses/Courses.component';
import { CreateCourseComponent } from './Components/Instructor/Sondos/CreateCourse/create-course.component';
import { GradesComponent } from './Components/Instructor/Sondos/Grades/Grades.component';

import { CreateAssignmentComponent } from './Components/Instructor/Sondos/createAssignment/createAssignment.component';
import { CourseViewComponent } from './Components/Instructor/Sohaila/courseView/courseView.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { CourseMaterialsComponent } from './Components/Student/Nada/course-materials/course-materials.component';
import { SubmissionAssignmentComponent } from './Components/Student/Nada/submission-assignment/submission-assignment.component';
import { HomeComponent } from './Components/Student/Nada/home/home.component';
import { CourseDetailsComponent } from './Components/Student/Nada/course-detail/course-detail.component';
import { studentDashboardComponent } from './Components/Student/Nada/studentDashboard/studentDashboard.component';
import { AssigmentsComponent } from './Components/Instructor/Sondos/Assigments/Assigments.component';
import { AssignmentDetailsComponent } from './Components/Instructor/Sohaila/AssignmentDetails/AssignmentDetails.component';
import { AssigmentSubmessionComponent } from './Components/Instructor/Sondos/AssigmentSubmession/AssigmentSubmessionComponent';


// Pipes
import { FirstKeyPipe } from './Components/Login & Reg/Rahma/pipes/firstKey.pipe';

// Locale
import en from '@angular/common/locales/en';
registerLocaleData(en);

// Routes
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'InstructorDashBoard', component: InstructorDashBoardComponent },
      { path: 'Instructor/Courses', component: CoursesComponent },
      // { path: 'Instructor/Courses/:id', component: CourseViewComponent },
      { path: 'Instructor/Grades', component: GradesComponent },
      { path: 'Instructor/Assigments', component: AssigmentsComponent },
      {
        path: 'Instructor/Assigments/AddNew',
        component: CreateAssignmentComponent,
      },
      // {
      //   path: 'Instructor/Assigment/:id',
      //   component: AssignmentDetailsComponent,
      // },
    {
      path:'Instructor/Assigments/:id',component:AssigmentSubmessionComponent
    },
      { path: 'Instructor/Courses/New', component: CreateCourseComponent },
      { path: 'Instructor/Course/:id', component: CourseViewComponent },
      { path: 'courses', component: CourseMaterialsComponent },
      { path: 'assignments', component: SubmissionAssignmentComponent },
      { path: 'home', component: HomeComponent },
      { path: 'course-detail/:id', component: CourseDetailsComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'Login', component: LoginComponent },
      { path: '', redirectTo: '/signup', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    InstructorDashBoardComponent,
    SideBarComponent,
    CoursesComponent,
    CreateCourseComponent,
    GradesComponent,
    AssigmentsComponent,
    CreateAssignmentComponent,
    CourseViewComponent,
    LayoutComponent,
    CourseMaterialsComponent,
    SubmissionAssignmentComponent,
    HomeComponent,
    CourseDetailsComponent,
    AssigmentSubmessionComponent,
    studentDashboardComponent,
    FirstKeyPipe, // التأكد من وجود الأنابيب هنا

  ],
  imports: [
    BrowserModule,
    CommonModule, // تم إضافته لتوفير التوجيهات الأساسية مثل ngIf و ngSwitch
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatListModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzBackTopModule,
    NgbModule,MatIcon,NzInputModule,
    NzPopconfirmModule,
    NzTableModule,
    NzBadgeModule,
    NzDividerModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient(),
  ],

  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
