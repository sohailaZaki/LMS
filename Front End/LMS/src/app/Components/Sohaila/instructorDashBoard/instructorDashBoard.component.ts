import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-instructorDashBoard',
  templateUrl: './instructorDashBoard.component.html',
  styleUrls: ['./instructorDashBoard.component.css']
})
export class InstructorDashBoardComponent implements OnInit {


  items: number[] = [];

  constructor() {
    for (let index = 0; index < 4; index++) {
      this.items.push(index);
    }
  }

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

@ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

scrollHorizontally(): void {
  console.log("clicked");
  if (this.scrollContainer) {
  console.log(this.scrollContainer);
    this.scrollContainer.nativeElement.scrollBy({
      left: 300, // مقدار التمرير
      behavior: 'smooth' // تمرير انسيابي
    });
    console.log("scrolled")
  }
}
scrollLeft(): void {
  this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight(): void {
  this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}
}

