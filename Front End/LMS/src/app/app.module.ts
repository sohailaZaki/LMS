import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
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
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/Login & Reg/Rahma/SignUp/signup.component';
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

//Sara
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { UserManagementComponent } from './Components/Sara/user-management/user-management.component';
import { AssignCourseComponent } from './Components/Sara/assign-course/assign-course.component';
import { AdminDashboardComponent } from './Components/Sara/admin-dashboard/admin-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; // Optional: For buttons


// Pipes
import { FirstKeyPipe } from './Components/Login & Reg/Rahma/pipes/firstKey.pipe';

// Locale
import en from '@angular/common/locales/en';

registerLocaleData(en);

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', redirectTo: '/signup', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'Login', component: LoginComponent },
    ],
  },
  // instructor route
  {
    path: 'instructor',
    component: LayoutComponent,
    children: [
      {path:'' ,redirectTo:'InstructorDashBoard',pathMatch:'full'},
      { path: 'InstructorDashBoard', component: InstructorDashBoardComponent },
      { path: 'Courses', component: CoursesComponent },
      { path: 'Grades', component: GradesComponent },
      { path: 'Assigments', component: AssigmentsComponent },
      { path: 'Assigments/AddNew', component: CreateAssignmentComponent },
      { path: 'Assigments/:id', component: AssigmentSubmessionComponent },
      { path: 'Courses/New', component: CreateCourseComponent },
      { path: 'Course/:id', component: CourseViewComponent },


    ],
  },
   // Admin route
   {
    path: 'Admin',
    component: LayoutComponent,
    children: [
      {path:'' ,redirectTo:'admin-dashboard',pathMatch:'full'},
      {path:'Sara/admin-dashboard',component:AdminDashboardComponent},
      {path:'Sara/user-management',component:UserManagementComponent},
      {path:'Sara/assign-course',component:AssignCourseComponent},
    ],
  },
  // student route
  {
    path: 'student-dashboard',
    component: studentDashboardComponent ,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CourseMaterialsComponent },
      { path: 'assignments', component: SubmissionAssignmentComponent },
      { path: 'course-detail/:id', component: CourseDetailsComponent },
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
    FirstKeyPipe,
    //Sara admin
    UserManagementComponent, 
    AssignCourseComponent, 
    AdminDashboardComponent


  ],
  imports: [
    BrowserModule,
    CommonModule, // تم إضافته لتوفير التوجيهات الأساسية مثل ngIf و ngSwitch
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    NzProgressModule,
    NzPaginationModule,
    NzUploadModule,
    NzSelectModule,
    NzInputNumberModule,
    //sara
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule

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
