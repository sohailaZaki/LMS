import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Login & Reg/Rahma/services/auth.service';
import { UserService } from '../../../Login & Reg/Rahma/services/user.service';


@Component({
  selector: 'app-course-materials',
  templateUrl: './course-materials.component.html',
  styleUrls: ['./course-materials.component.css']
})
export class CourseMaterialsComponent implements OnInit {
  courses: any[] = [];
  studentId = 4;

  constructor(private courseService: CourseService, private router: Router,private userService: UserService) {}

  ngOnInit(): void {
    this.fetchStudentCourses();
    
  }

  fetchStudentCourses(): void {
    this.courseService.getStudentCourses(this.studentId).subscribe({
      next: (data) => {
        console.log('Courses:', data);
        if (Array.isArray(data)) {
          this.courses = data;
        } else {
          console.error('Invalid data structure:', data);
        }
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      }
    });
  }

  navigateToCourse(course: any): void {
    console.log(course); // تأكد من البيانات هنا
    this.router.navigate(['/student-dashboard/course-detail', course.courseID], { state: { courseDetails: course } });
  }
}
