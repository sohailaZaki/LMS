import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class StudentsServices{
  grades: {course:string,grade:number}[]=[];
 private students :{id:number,name:string,grades:{course:number,grade:number}[]}[]=[
  { id: 2021170247, name: 'Sohaila', grades: [{course:1,grade:95}, {course: 4,grade:90,}]},
  { id: 2021170240, name: 'Sondos', grades: [{ course:1,grade: 100},{ course: 2,grade: 85 }]},
  { id: 2021170455, name: 'Nada', grades: [{ course:2,grade:  88}, {course:3,grade:  92 } ]},
  { id: 2021170040, name: 'Aya', grades: [{course: 1, grade: 97}, {course:3,grade:  89 }] },
  { id: 2021170224, name: 'Sara', grades: [{ course:3,grade:  93},{ course:3,grade:  96 } ]},
];

public getStudents() {

  return this.students;

}
}
