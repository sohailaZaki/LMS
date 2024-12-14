import { Component, OnInit } from '@angular/core';
import { StudentsServices } from '../../Services/Students.service';
import { CoursesServices } from '../../Services/Courses.services';

@Component({
  selector: 'app-Grades',
  templateUrl: './Grades.component.html',
  styleUrls: ['./Grades.component.css']
})
export class GradesComponent implements OnInit {

  listOfCourses: any[] = [];
  students: any[] = [];

  constructor(private coursesService: CoursesServices, private studentsService: StudentsServices) {}

  ngOnInit(): void {
    // الكورسات جاهزة مع خاصية expand
    this.listOfCourses = this.coursesService.getCourses().map(course => ({
      ...course,
      expand: false,
    }));

    // الطلاب بالبيانات المحدثة
    this.students = this.studentsService.getStudents();
  }

  // فلترة الطلبة بناءً على اسم الكورس
  getStudentsForCourse(courseId: number) {
    return this.students
      .filter(student =>
        student.grades.some((grade: { course: number, grade: number }) => grade.course === courseId)
      )
      .map(student => {
        const gradeObj = student.grades.find((grade: { course: number, grade: number }) => grade.course === courseId);
        return {
          id: student.id,
          name: student.name,
          grade: gradeObj ? gradeObj.grade : null,
        };
      });
  }

}
