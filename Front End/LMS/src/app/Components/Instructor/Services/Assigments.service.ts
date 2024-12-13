import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssigmentsService {

constructor() { }
private Assignments = [
  {
    title: 'Assignment 1',
    description: 'Front-end Course',
    image: "../../../../assets/assigment.webp"
  },
  {
    title: 'Assignment 2',
    description: 'Front-end Course',
    image: "../../../../assets/assigment.webp"
  },
  {
    title: 'Assignment 3',
    description: 'Front-end Course',
    image: "../../../../assets/assigment.webp"
  }, {
    title: 'Assignment 4',
    description: 'Front-end Course',
    image: "../../../../assets/assigment.webp"
  }, {
    title: 'Assignment 5',
    description: 'Front-end Course',
    image: "../../../../assets/assigment.webp"
  }, {
    title: 'Assignment 6',
    description: 'Front-end Course',
    image: "../../../../assets/assigment.webp"
  },
]; public getAssignments(){
return this.Assignments;
}
}

