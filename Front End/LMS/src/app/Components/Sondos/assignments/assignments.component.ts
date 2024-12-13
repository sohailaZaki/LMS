import { Component } from '@angular/core';
import { Route } from '@angular/router';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  // constructor(private router: Router) {}
  navigateToCourse(course: any) {
    // this.router.navigate(['/dashboard/Assignment-detail', course.id], { state: { courseDetails: course } });
  }

  ngOnInit() {
  }
  Assignments = [
    { 
      title: 'Assignment 1',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Assignment 1',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Assignment 1',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    }, {
      title: 'Assignment 1',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    }, {
      title: 'Assignment 1',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    }, {
      title: 'Assignment 1',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
  ];

}
