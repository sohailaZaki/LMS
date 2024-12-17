import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-courses',
  templateUrl: './pending-courses.component.html',
  standalone:false,
  styleUrl: './pending-courses.component.css'
})
export class PendingCoursesComponent {
  allCourses = [
    { id: 1, name: 'Human Computer Interaction', instructor: 'Dr. Nivin Atef', startDate: '1st Oct 2024', endDate: '14th Jan 2024', status: 'in progress' },
    { id: 2, name: 'Design Patterns', instructor: 'Prof. Walaa Khaled', startDate: '1st Oct 2024', endDate: '14th Jan 2024', status: 'pending' },
    { id: 3, name: 'Data Science', instructor: 'Dr. Eman Amin', startDate: '1st Oct 2024', endDate: '14th Jan 2024', status: 'archived' },
    { id: 4, name: 'Cyber Security', instructor: 'Dr. Alshaimaa Abo-alian', startDate: '1st Oct 2024', endDate: '14th Jan 2024', status: 'archived' },
    { id: 5, name: 'Mobile Computing', instructor: 'Dr. Soha Nabil', startDate: '1st Oct 2024', endDate: '14th Jan 2024', status: 'pending' }
  ];

  courses = this.allCourses.filter(course => course.status === 'pending');

  constructor(private router: Router) {}

  /**
   * 
   * @param courseId 
   */
  viewCourseDetails(courseId: number): void {
    console.log(`Viewing details for course ID: ${courseId}`);
  
    this.router.navigate([`/admin/details-for-pending-course/${courseId}`]);
  }

  /**
   * 
   * @param courseId 
   */
  deleteCourse(courseId: number): void {
    const courseName = this.courses.find(course => course.id === courseId)?.name || 'Unknown Course';
    const confirmation = confirm(`Are you sure you want to delete the course "${courseName}"?`);
    if (confirmation) {
      this.courses = this.courses.filter(course => course.id !== courseId);
      console.log(`Course with ID ${courseId} has been deleted.`);
    }
  }

  /**
   * 
   * @param courseId 
   */
  completeData(courseId: number): void {
    console.log(`Marking course ID ${courseId} as complete.`);
    const course = this.courses.find(course => course.id === courseId);
    if (course) {
      course.status = 'Completed';
      console.log(`Course "${course.name}" marked as completed.`);
    }
  }
  navigateToDetails() {
    this.router.navigate(['/admin/details-for-pending-course']); 
  }
}
