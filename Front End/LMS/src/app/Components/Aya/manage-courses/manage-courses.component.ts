import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent {
  courses = [
    {
      id: 1,
      name: 'Human Computer Interaction',
      instructor: 'Nivin Atef' ,
      startDate: '1st Oct 2024',
      endDate: '14th Jan 2024',
      status: 'in progress',
      description: 'Introduction to HCI principles and practices'
    },
    {
      id: 2,
      name: 'Machine Learning Basics',
      instructor:  'Ahmed Kamel' ,
      startDate: '10th Sep 2024',
      endDate: '20th Dec 2024',
      status: 'completed',
      description: 'Fundamentals of machine learning and AI'
    },
    {
      id: 3,
      name: 'Web Development',
      instructor:  'Sara Mahmoud',
      startDate: '5th Nov 2024',
      endDate: '15th Feb 2025',
      status: 'in progress',
      description: 'Modern web development techniques and frameworks'
    },
    {
      id: 4,
      name: 'Data Structures and Algorithms',
      instructor:  'Hassan Ali' ,
      startDate: '1st Oct 2024',
      endDate: '30th Dec 2024',
      status: 'archived',
      description: 'In-depth understanding of data structures and algorithms'
    },
    {
      id: 5,
      name: 'Database Management Systems',
      instructor: 'Laila Mostafa',
      startDate: '15th Oct 2024',
      endDate: '20th Jan 2025',
      status: 'in progress',
      description: 'Learn about relational databases and SQL'
    }
  ];

  editingCourseId: number | null = null;

  constructor(private router: Router) {}

  viewCourseDetails(courseId: number): void {
    this.editingCourseId = this.editingCourseId === courseId ? null : courseId;
  }

  saveCourse(course: any): void {
    console.log('Saved course:', course);
    this.editingCourseId = null;
  }

  deleteCourse(courseId: number): void {
    const courseName = this.courses.find(course => course.id === courseId)?.name || 'Unknown Course';
    const confirmation = confirm(`Are you sure you want to delete the course "${courseName}"?`);
    if (confirmation) {
      this.courses = this.courses.filter(course => course.id !== courseId);
      console.log(`Course with ID ${courseId} has been deleted.`);
    }
  }

  goToCreateNewCourse() {
    this.router.navigate(['/Aya/create-new-course']);
  }

  navigateToDetails() {
    this.router.navigate(['/Aya/course-details-are-in-progress']);
  }
}
