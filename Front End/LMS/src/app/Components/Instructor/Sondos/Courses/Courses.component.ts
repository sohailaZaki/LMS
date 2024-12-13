import { CoursesServices } from './../../Services/Courses.services';
import { inject, Injectable } from "@angular/core";
import { Component } from '@angular/core';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
 private courses:  {
  title: string,
  description: string,
  image: string
}[] =[];
/**
 *
 */
constructor(courseService:CoursesServices) {
 this.courses = courseService.getCourses()

}
}
