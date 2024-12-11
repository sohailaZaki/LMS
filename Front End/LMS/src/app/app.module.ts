import { InstructorDashBoardComponent } from './Components/Sohaila/instructorDashBoard/instructorDashBoard.component';
import { Router, RouterLink, RouterModule, Routes,RouterOutlet } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListComponent, NzListItemComponent } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonComponent ,NzButtonModule} from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SideBarComponent } from './Components/Sondos/SideBar/SideBar.component';
import { CoursesComponent } from './Components/Sondos/Courses/Courses.component';
import { CreateCourseComponent } from './Components/Sondos/CreateCourse/create-course.component';
import { AssignmentsComponent } from './Components/Sondos/assignments/assignments.component';
import { CreateAssignmentsComponent } from './Components/Sondos/create-assignments/create-assignments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseViewComponent } from './Components/Sohaila/courseView/courseView.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { ScrollingModule } from '@angular/cdk/scrolling';
const routes: Routes=[

  {path:'',component:LayoutComponent,children:[
{path:'InstructorDashBoard',component:InstructorDashBoardComponent},
{path:'Instructor/Courses',component:CoursesComponent },
{path:'Instructor/Courses/:id',component:CoursesComponent },
  ] }

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
      {
        path: 'Instructor/Assigment/:id',
        component: AssignmentDetailsComponent,
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
    CourseViewComponent,LayoutComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule, IconsProviderModule, NzLayoutModule, NzMenuModule, FormsModule,NzCardModule,MatListModule,NzListItemComponent,NzListComponent,NzButtonComponent,
    NgbModule,NzDropDownModule,NzIconModule,NzButtonModule,MatIcon,
    RouterOutlet,NzBackTopModule,ScrollingModule,
    RouterModule.forRoot(routes)
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
