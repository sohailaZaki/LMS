import { find } from 'rxjs';
import { AssigmentSubmissionsService } from './AssigmentSubmissions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssigmentsService {
  assigmentSubmessionSeervice: AssigmentSubmissionsService =
    new AssigmentSubmissionsService();
  assigmentSubmession: any[] = [];
  constructor() {
    this.assigmentSubmession =
      this.assigmentSubmessionSeervice.getAssigmentSubmissions();
  }
  private Assignments = [
    {
      id: 301,
      title: 'Assignment 1',
      course: 'Front-end Course',
      courseId:1,
      image: '../../../../assets/assigment.webp',
      DeadLine: 2024 - 1 - 1,
      assigmentSubmession: this.assigmentSubmession,
      filePath:'Assignment1.pdf'
    },
    {
      id: 301,
      title: 'Assignment 2',
      course: 'Front-end Course',
      courseId:1,
      image: '../../../../assets/assigment.webp',
      DeadLine: 2024 - 12 - 1,
      filePath:'Assignment 2.pdf'

    },
    {
      id: 302,
      title: 'Assignment 3',
      course: 'Front-end Course',
      courseId:1,
      image: '../../../../assets/assigment.webp',
      DeadLine: 2024 - 3 - 1,
      filePath:'Assignment 3.pdf'

    },
    {
      id: 303,
      title: 'Assignment 4',
      course: 'Front-end Course',
      courseId:1,
      image: '../../../../assets/assigment.webp',
      DeadLine: 2024 - 11 - 17,
      filePath:'Assignment 4.pdf'

    },
    {
      id: 304,
      title: 'Assignment 5',
      course: 'Front-end Course',
      courseId:1,
      image: '../../../../assets/assigment.webp',
      DeadLine: 2024 - 1 - 5,
      filePath:'Assignment 5.pdf'

    },
    {
      id: 305,
      title: 'Assignment 6',
      course: 'Front-end Course',
      courseId:1,
      image: '../../../../assets/assigment.webp',
      DeadLine: 2024 - 1 - 7,
      filePath:'Assignment 6.pdf'

    },
  ];
  public getAssignments() {
    return this.Assignments;
  }
  public getAssignmentsSubmissionsByAssigment(Assigmentid: number) {
    const assignment = this.Assignments.find((A) => A.id === Assigmentid);
    if (assignment) {
      return assignment.assigmentSubmession;
    } else return [];
  }
}
