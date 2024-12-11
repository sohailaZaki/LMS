import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseView',
  templateUrl: './courseView.component.html',
  styleUrls: ['./courseView.component.css']
})
export class CourseViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  angularCourse ={
    courseName:"Angular Course",
    cousreDec:"Consume REST services using Observables. Modularize applications with the Component Router. Capture and validate input with template-driven forms. Leverage continued support with after-course one-on-one instructor coaching and computing sandbox."}

    elements:{ elementName: string; Desc: string;img:string}[]=[{
    elementName: 'Courses',
    Desc: 'view all the courses you created before and manage them',img:"../../../../assets/courses.webp"},{
      elementName:'Assignments',
      Desc:'view all the assignments in each course you created before and manage them ',
      img:"../../../../assets/assessment.webp"
      },
   { elementName:'Grades',
    Desc:'view all the assignments in each course you created before and manage them ',
  img:"../../../../assets/grades.webp"
  },
   { elementName:'Student Monitiring',
    Desc:'have a monitior on each studen and their progress in your courses'
    ,img:"../../../../assets/Monitoring.webp"}

  ]
  Categories:{filedName:string,fieldElements:string[]}[]=[
    {filedName:"Lectures",fieldElements:["Lec1","Lec2","Lec3"]},
    {filedName:"Labs",fieldElements:["Lab1","Lab2","Lab3"]},
    {filedName:"Videos",fieldElements:["Lec1 Video link","Lec2 Video link"," Lec3 Video  link"]}

    ]
}
