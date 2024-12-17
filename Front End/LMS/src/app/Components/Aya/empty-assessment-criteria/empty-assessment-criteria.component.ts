import { Component,OnInit } from '@angular/core';
type Section = 'lectureDetails' | 'assessmentCriteria' | 'courseStats';
@Component({
  selector: 'app-empty-assessment-criteria',
  templateUrl: './empty-assessment-criteria.component.html',
  styleUrl: './empty-assessment-criteria.component.css'
})
export class EmptyAssessmentCriteriaComponent {
  isEditing: { [key in Section]: boolean } = {
    lectureDetails: false,
    assessmentCriteria: false,
    courseStats: false
  };

  originalLectureDetails = {
    time: '10:00 AM',
    location: 'Room 101'
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
    if (this.isEditing[section]) {
     
      this.restoreOriginalValues(section);
    }
    this.isEditing[section] = !this.isEditing[section];
  }


  restoreOriginalValues(section: string): void {
    if (section === 'lectureDetails') {
      this.lectureDetails = { ...this.originalLectureDetails };
    } else if (section === 'assessmentCriteria') {
      this.assessmentCriteria = { ...this.originalAssessmentCriteria };
    } else if (section === 'courseStats') {
      this.courseStats = { ...this.originalCourseStats };
    }
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
