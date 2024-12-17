import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.css'],
})
export class AssignCourseComponent implements OnInit {
  userId!: string; // Holds the ID of the selected user

  assignedCourses = [
    { name: 'Operating Systems', code: '12345', date: '1th Oct 2024–14th Jan 2024', status: 'Completed' },
    { name: 'Data Science', code: '12352', date: '1th Oct 2024–14th Jan 2024', status: 'ongoing' },
    { name: 'HCI', code: '25368', date: '1th Oct 2024–14th Jan 2024', status: 'ongoing' },
    { name: 'Mobile Computing', code: '85296', date: '1th Oct 2024–14th Jan 2024', status: 'ongoing' },
    { name: 'Design Pattern', code: '56825', date: '1th Oct 2024–14th Jan 2024', status: 'ongoing' },
  ];
  

  availableCourses = ['Cyber Security', 'Machine Learning', 'AI Development', 'Cloud Computing'];

  selectedCourse: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the userId from the route
    this.userId = this.route.snapshot.paramMap.get('userId')!;
    console.log(`Navigated to Assign Course Page for User ID: ${this.userId}`);
  }

  assignCourse() {
    if (this.selectedCourse) {
      this.assignedCourses.push({
        name: this.selectedCourse,
        code: Math.floor(Math.random() * 100000).toString(),
        date: '15th Jan 2025–15th May 2025',
        status: 'ongoing',
      });
      this.selectedCourse = '';
      alert('Course Assigned Successfully!');
    } else {
      alert('Please select a course.');
    }
  }
}

