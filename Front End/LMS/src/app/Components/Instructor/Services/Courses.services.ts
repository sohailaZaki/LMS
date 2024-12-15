import { AssigmentsService } from './Assigments.service';
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class CoursesServices{
  assigmentsService:AssigmentsService = new AssigmentsService();
  assigments:any[]=[];
  courses:any[]=[];
  /**
   *
   */
  constructor() {
    this.assigments=this.assigmentsService.getAssignments();

     this.courses = [
       {
         id:1,
         title: 'Angular Course',
         description: 'Front-end Course',
         image: "../../../../assets/angular.webp",
         students:[
            { id: 2021170247, name: 'Sohaila', grade:100 },
            { id: 2021170240, name: 'Sondos', grade:100 },
            { id: 2021170447, name: 'Nada', grade:100 },  { id: 2021170247, name: 'Sohaila', grade:100 },
            { id: 2021170240, name: 'Sondos', grade:100 },
            { id: 2021170447, name: 'Nada', grade:100 },  { id: 2021170247, name: 'Sohaila', grade:100 },
            { id: 2021170240, name: 'Sondos', grade:100 },
            { id: 2021170447, name: 'Nada', grade:100 },  { id: 2021170247, name: 'Sohaila', grade:100 },
            { id: 2021170240, name: 'Sondos', grade:100 },
            { id: 2021170447, name: 'Nada', grade:100 },
         ],
       courseAssigments:this.assigments
       },
       {
         id:2,
         title: 'Angular Course',
         description: 'Front-end Course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sara', grade:100 },
           { id: 2021170240, name: 'Aya', grade:100 },

        ],
       courseAssigments:this.assigments

       },
       {
         id:3,
         title: 'Angular Course',
         description: 'Front-end Course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:4,
         title: 'Node.js Course',
         description: 'Little description about Node.js course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Rahma', grade:100 },

        ]
       },
       {
         id:5,
         title: 'Node.js Course',
         description: 'Little description about Node.js course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:6,
         title: 'Node.js Course',
         description: 'Little description about Node.js course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:7,
         title: 'React.js Course',
         description: 'Little description about React course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:8,
         title: 'React.js Course',
         description: 'Little description about React course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:9,
         title: 'React.js Course',
         description: 'Little description about React course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:10,
         title: 'ASP.NET MVC Core',
         description: 'Little description about .NET course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:11,
         title: 'ASP.NET MVC Core',
         description: 'Little description about .NET course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:12,
         title: 'ASP.NET MVC Core',
         description: 'Little description about .NET course',
         image: "../../../../assets/angular.webp",
         students:[
           { id: 2021170247, name: 'Sohaila', grade:100 },
           { id: 2021170240, name: 'Sondos', grade:100 },
           { id: 2021170447, name: 'Nada', grade:100 },
        ]
       },
       {
         id:13,
         title: 'ASP.NET MVC Core',
         description: 'Little description about .NET course',
         image: "../../../../assets/angular.webp"
       },
     ];
  }
 public getCourses(){
  return this.courses;
}
public getAssignmentsByCourse(courseId: number) {
  // Find the course by ID
  const course = this.courses.find(c => c.id === courseId);

  if (course) {
    return course.courseAssigments;  // Return the assignments for the found course
  } else {
    return [];  // Return an empty array if course is not found
  }
}
 public getPredictedStudentSubmissions(courseId:number){
  const course = this.courses.find(c=>c.id==courseId);
  const numofAssigments = course?.courseAssigments?.length;
  if(numofAssigments)
  return numofAssigments
else return 0 ;
  }
  public getStudentinCourse(courseId: number) {
    const course = this.courses.find(c => c.id === courseId);  // Find course by ID

    if (course && course.students) {  // Check if course and students exist
      console.log(course.students);  // Log students
      return course.students;  // Return students
    } else {
      console.log("empty list")
      return [];  // Return empty array if no students or course is found
    }
  }
}
