import { CoursesServices } from './../../Services/Courses.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createAssignment',
  templateUrl: './createAssignment.component.html',
  styleUrls: ['./createAssignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {
courseService:CoursesServices=new CoursesServices();
listofCourses:{title:string}[]=[];
  constructor() {

    this.listofCourses = this.courseService.getCourses();
  }

  ngOnInit() {
  }

}
