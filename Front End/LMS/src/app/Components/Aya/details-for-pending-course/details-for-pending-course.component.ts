import { Component ,OnInit} from '@angular/core';
type Section = 'lectureDetails' | 'assessmentCriteria' | 'courseStats';
@Component({
  selector: 'app-details-for-pending-course',
  templateUrl: './details-for-pending-course.component.html',
  styleUrl: './details-for-pending-course.component.css'
})
export class DetailsForPendingCourseComponent{
  isEditing: { [key in Section]: boolean } = {
    lectureDetails: false,
    assessmentCriteria: false,
    courseStats: false
  };


  originalLectureDetails = {
    time: 'Pending',   
    location: 'Pending'
  };

  originalAssessmentCriteria = {
    theoretical: 60,
    practical: 20,
    yearwork: 10,
    midterm: 5,
    quizzes: 5
  };

  originalCourseStats = {
    assigned: 50,
    dropped: 5
  };


  lectureDetails = { ...this.originalLectureDetails };
  assessmentCriteria = { ...this.originalAssessmentCriteria };
  courseStats = { ...this.originalCourseStats };

  toggleEdit(section: Section): void {
    this.isEditing[section] = !this.isEditing[section];
  }


  saveChanges(): void {
    console.log('Changes saved:', {
      lectureDetails: this.lectureDetails,
      assessmentCriteria: this.assessmentCriteria,
      courseStats: this.courseStats
    });

   
    this.isEditing = {
      lectureDetails: false,
      assessmentCriteria: false,
      courseStats: false
    };

 
    this.originalLectureDetails = { ...this.lectureDetails };
    this.originalAssessmentCriteria = { ...this.assessmentCriteria };
    this.originalCourseStats = { ...this.courseStats };
  }
}
