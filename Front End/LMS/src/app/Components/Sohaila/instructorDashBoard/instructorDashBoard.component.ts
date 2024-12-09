import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-instructorDashBoard',
  templateUrl: './instructorDashBoard.component.html',
  styleUrls: ['./instructorDashBoard.component.css']
})
export class InstructorDashBoardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
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

}

