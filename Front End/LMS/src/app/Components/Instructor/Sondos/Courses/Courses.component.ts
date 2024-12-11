import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Courses',
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private router: Router) {}
  navigateToCourse(course: any) {
    this.router.navigate(['/dashboard/course-detail', course.id], { state: { courseDetails: course } });
  }



  ngOnInit() {
  }
  courses = [
    {
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Node.js Course',
      description: 'Little description about Node.js course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Node.js Course',
      description: 'Little description about Node.js course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Node.js Course',
      description: 'Little description about Node.js course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'React.js Course',
      description: 'Little description about React course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'React.js Course',
      description: 'Little description about React course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'React.js Course',
      description: 'Little description about React course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
  ];

}