import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class StudentsServices{
  // grades: {course:string,grade:number,assigments:{}[]}[]=[];
  private students: {
    id: number;
    name: string;
    grades: {
      course: number;
      grade: number;
      assigments: {
        id: number;
        submitted: boolean;
        file: string;
        grade: number;
      }[];
    }[];
  }[] = [
    {
      id: 2021170247,
      name: 'Sohaila',
      grades: [
        {
          course: 1,
          grade: 95,
          assigments: [
            {
              id: 1,
              submitted: true,
              file: 'sohaila-angular-assignment.pdf',
              grade: 90,
            },
            { id: 2, submitted: false, file: '', grade: 0 },
          ],
        },
        {
          course: 4,
          grade: 90,
          assigments: [
            {
              id: 1,
              submitted: true,
              file: 'sohaila-angular-assignment.pdf',
              grade: 90,
            },
            { id: 2, submitted: false, file: '', grade: 0 },
          ],
        },
      ],
    },
    {
      id: 2021170240,
      name: 'Sondos',
      grades: [
        {
          course: 1,
          grade: 100,
          assigments: [
            {
              id: 3,
              submitted: true,
              file: 'sondos-angular-assignment.pdf',
              grade: 90,
            },
            { id: 2, submitted: false, file: '', grade: 0 },
          ],
        },
        {
          course: 2,
          grade: 85,
          assigments: [
            {
              id: 1,
              submitted: true,
              file: 'sondos-angular-assignment.pdf',
              grade: 90,
            },
            { id: 2, submitted: false, file: '', grade: 0 },
          ],
        },
      ],
    },
    {
      id: 2021170455,
      name: 'Nada',
      grades: [
        {
          course: 2,
          grade: 88,
          assigments: [
            {
              id: 3,
              submitted: true,
              file: 'Nada-angular-assignment.pdf',
              grade: 90,
            },
            { id: 2, submitted: false, file: '', grade: 0 },
          ],
        },
        {
          course: 3,
          grade: 92,
          assigments: [{ id: 2, submitted: false, file: '', grade: 0 }],
        },
        // { id: 2021170040, name: 'Aya', grades: [{course: 1, grade: 97}, {course:3,grade:  89 }] },
        // { id: 2021170224, name: 'Sara', grades: [{ course:3,grade:  93},{ course:3,grade:  96 } ]},
      ],
    },
  ];
  public getStudents() {
    return this.students;
  }
  getAssignmentsByCourse(courseId: number) {
    const assignments: any[] = [];
    this.students.forEach((student) => {
      const grade = student.grades.find((g) => g.course === courseId);
      if (grade) {
        grade.assigments.forEach((assignment) => {
          assignments.push({
            id: assignment.id,
            studentID:student.id,
            studentName: student.name,
            submitted: assignment.submitted,
            file: assignment.file,
            grade: assignment.grade || null,
          });
        });
      }
    });
    return assignments;
  }

}
