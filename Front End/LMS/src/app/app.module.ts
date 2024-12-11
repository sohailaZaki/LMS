import { InstructorDashBoardComponent } from './Components/Sohaila/instructorDashBoard/instructorDashBoard.component';
import { Router, RouterLink, RouterModule, Routes,RouterOutlet } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzCardModule } from 'ng-zorro-antd/card';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SideBarComponent } from './Components/Sondos/SideBar/SideBar.component';
import { CoursesComponent } from './Components/Sondos/Courses/Courses.component';
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

]
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
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
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
exports:[
  RouterModule
]
})
export class AppModule {

}
