import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssigmentsService {

constructor() { }
private Assignments = [
  {
    title: 'Assignment 1',
    course: 'Front-end Course',
    image: "../../../../assets/assigment.webp",
    DeadLine: 2024-1-1,
  },
  {
    title: 'Assignment 2',
    course: 'Front-end Course',
    image: "../../../../assets/assigment.webp",
    DeadLine: 2024-12-1,
  },
  {
    title: 'Assignment 3',
    course: 'Front-end Course',
    image: "../../../../assets/assigment.webp",
    DeadLine: 2024-3-1,

  }, {
    title: 'Assignment 4',
    course: 'Front-end Course',
    image: "../../../../assets/assigment.webp",
    DeadLine: 2024-11-17,

  }, {
    title: 'Assignment 5',
    course: 'Front-end Course',
    image: "../../../../assets/assigment.webp",
    DeadLine: 2024-1-5,

  }, {
    title: 'Assignment 6',
    course: 'Front-end Course',
    image: "../../../../assets/assigment.webp",
    DeadLine: 2024-1-7,

  },
]; public getAssignments(){
return this.Assignments;
}
}

