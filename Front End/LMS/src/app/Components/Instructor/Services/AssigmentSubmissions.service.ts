import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssigmentSubmissionsService {
  constructor() {}
  AssigmentSubmissions: {Id:number,StudentID :number,CourseID :number,FilePath :string,SubmittedAt :Date,AssignmnetID :number }[] = [
   {
    Id: 1,
    StudentID: 2021170247,
    CourseID:  1,
    FilePath: 'C:\\Submissions\\Student101_Assignment1.pdf',
    SubmittedAt: new Date('2024-12-14T12:00:00Z'),
    AssignmnetID:301,
    },
    {
      Id: 11,
      StudentID: 2021170247,
      CourseID:  1,
      FilePath: 'C:\\Submissions\\Student101_Assignment1.pdf',
      SubmittedAt: new Date('2024-12-14T12:00:00Z'),
      AssignmnetID:301,
      },
      {
        Id: 12,
        StudentID: 2021170247,
        CourseID:  1,
        FilePath: 'C:\\Submissions\\Student101_Assignment1.pdf',
        SubmittedAt: new Date('2024-12-14T12:00:00Z'),
        AssignmnetID:301,
        },
    {

      Id:2,
      StudentID: 2021170240,
      CourseID:  1,
      FilePath: 'C:\\Submissions\\Student102_Assignment1.pdf',
      SubmittedAt: new Date('2024-12-15T14:30:00Z'),
      AssignmnetID: 302,

    },
{  Id:10,
  StudentID: 2021170240,
  CourseID:  1,
  FilePath: 'C:\\Submissions\\Student102_Assignment1.pdf',
  SubmittedAt: new Date('2024-12-15T14:30:00Z'),
  AssignmnetID: 302,

},

     {
      Id: 3,
      StudentID: 2021170447,
      CourseID:  1,
      FilePath: 'C:\\Submissions\\Student103_Assignment1.pdf',
      SubmittedAt: new Date('2024-12-16T16:45:00Z'),
      AssignmnetID:303,


    },

    {

      Id: 4,
      StudentID: 104,
      CourseID:  204,
      FilePath:   'C:\\Submissions\\Student104_Assignment1.pdf',
      SubmittedAt: new Date('2024-12-17T18:20:00Z'),
      AssignmnetID:   304,

    },

    {
      Id: 5,
      StudentID: 105,
      CourseID:  205,
      FilePath: 'C:\\Submissions\\Student105_Assignment1.pdf',
      SubmittedAt: new Date('2024-12-18T20:10:00Z'),
      AssignmnetID:305,

    },
    { Id: 6,
     StudentID: 2021170447,
     CourseID:  1,
     FilePath: 'C:\\Submissions\\Student103_Assignment1.pdf',
     SubmittedAt: new Date('2024-12-16T16:45:00Z'),
     AssignmnetID:304,


   },    { Id: 7,
    StudentID: 2021170447,
    CourseID:  1,
    FilePath: 'C:\\Submissions\\Student103_Assignment1.pdf',
    SubmittedAt: new Date('2024-12-16T16:45:00Z'),
    AssignmnetID:304,


  },    { Id: 8,
    StudentID: 2021170447,
    CourseID:  1,
    FilePath: 'C:\\Submissions\\Student103_Assignment1.pdf',
    SubmittedAt: new Date('2024-12-16T16:45:00Z'),
    AssignmnetID:304,


  },    { Id: 9,
    StudentID: 2021170447,
    CourseID:  1,
    FilePath: 'C:\\Submissions\\Student103_Assignment1.pdf',
    SubmittedAt: new Date('2024-12-16T16:45:00Z'),
    AssignmnetID:304,


  },
  { Id: 7,
    StudentID: 2021170447,
    CourseID:  1,
    FilePath: 'C:\\Submissions\\Student103_Assignment1.pdf',
    SubmittedAt: new Date('2024-12-16T16:45:00Z'),
    AssignmnetID:304,


  },
  ];
getAssigmentSubmissions(){
  return this.AssigmentSubmissions
}

getActualStudentSubmissions(courseId:number,studentId:number){
  //return number of submissions of student in specified course
  console.log(this.AssigmentSubmissions);
  console.log('studentId:', studentId, 'courseId:', courseId);
  const isfound = this.AssigmentSubmissions.filter(s=>s.CourseID===courseId &&s.StudentID===studentId);
console.log(isfound)
if (isfound.length > 0) {
  const numberofSubmissions = isfound.length;
  return numberofSubmissions;
} else {
  const numberofSubmissions = 0;
  return numberofSubmissions;
}
}

}
