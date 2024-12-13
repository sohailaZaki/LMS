import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails: any; 
  selectedLecture: any = null;
  selectedLabs: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseDetails = history.state.courseDetails;

    if (!this.courseDetails) {
      this.loadCourseDetails();
    }
  }
  openLecture(lecture: any) {
    if (lecture && lecture.pdfUrl) {
      console.log('Opening PDF:', lecture.pdfUrl); // سجل الرابط الذي سيتم فتحه
      window.open(lecture.pdfUrl, '_blank');
    } else {
      console.error("PDF not found or path is incorrect.");
    }
  }
  
  openass( assessment: any) {
    if ( assessment &&  assessment.pdfUrl) {
      console.log('Opening PDF:',  assessment.pdfUrl); // سجل الرابط الذي سيتم فتحه
      window.open( assessment.pdfUrl, '_blank');
    } else {
      console.error("PDF not found or path is incorrect.");
    }
  }
  
  openLabs( labs: any) {
    if ( labs&&  labs.pdfUrl) {
      console.log('Opening PDF:',  labs.pdfUrl); // سجل الرابط الذي سيتم فتحه
      window.open( labs.pdfUrl, '_blank');
    } else {
      console.error("PDF not found or path is incorrect.");
    }
  }


  loadCourseDetails() {
    const courseId = this.route.snapshot.paramMap.get('id')!;
   
  }
}
