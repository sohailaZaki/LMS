import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails: any;
  selectedLecture: any = null;
  selectedLabs: any = null;
  progress=75;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    // حاول جلب البيانات من history.state
    this.courseDetails = history.state.courseDetails;

    if (!this.courseDetails) {
      // إذا لم يتم تمرير البيانات، اجلبها من الـ API باستخدام courseID
      const courseId = this.route.snapshot.paramMap.get('id');
      if (courseId) {
        this.fetchCourseDetails(+courseId);
      } else {
        console.error('No course ID available');
      }
    }
  }

  fetchCourseDetails(courseId: number): void {
    this.courseService.getStudentCourses(4).subscribe({
      next: (data) => {
        // ابحث عن تفاصيل الكورس المطلوب بناءً على ID
        this.courseDetails = data.find((course: any) => course.courseID === courseId);
        if (!this.courseDetails) {
          console.error('Course details not found for ID:', courseId);
        }
      },
      error: (err) => {
        console.error('Error fetching course details:', err);
      }
    });
  }

  openLecture(lecture: any) {
    if (lecture && lecture.pdfUrl) {
      console.log('Opening PDF:', lecture.pdfUrl);
      window.open(lecture.pdfUrl, '_blank');
    } else {
      console.error('PDF not found or path is incorrect.');
    }
  }

  openass(assessment: any) {
    if (assessment && assessment.pdfUrl) {
      console.log('Opening PDF:', assessment.pdfUrl);
      window.open(assessment.pdfUrl, '_blank');
    } else {
      console.error('PDF not found or path is incorrect.');
    }
  }

  openLabs(labs: any) {
    if (labs && labs.pdfUrl) {
      console.log('Opening PDF:', labs.pdfUrl);
      window.open(labs.pdfUrl, '_blank');
    } else {
      console.error('PDF not found or path is incorrect.');
    }
  }
  openMaterial(material: any) {
    if (material && material.materialFilePath) {
      console.log('Opening material file:', material.materialFilePath);
      window.open(material.materialFilePath, '_blank'); // يفتح الرابط في نافذة جديدة
    } else {
      console.error('Material file not found or path is incorrect.');
    }
  }
  
  
}
