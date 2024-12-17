import { CoursesServices } from './../../Services/Courses.services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Courses',
  templateUrl: './Courses.component.html',
  standalone:false,
  styleUrls: ['./Courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseServices: CoursesServices = new CoursesServices;
  constructor(private router: Router,courseServices:CoursesServices) {}
  navigateToCourse(course: any) {
    this.router.navigate(['/dashboard/course-detail', course.id], { state: { courseDetails: course } });
  }


courses:{title:string,description:string,image:string}[]=[];
  ngOnInit() {

    this.courses = this.courseServices.getCourses();
  }



}
