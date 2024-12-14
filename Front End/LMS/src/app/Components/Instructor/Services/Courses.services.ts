import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class CoursesServices{
 private courses = [
    {
      id:1,
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
      id:2,
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp",
      students:[
        { id: 2021170247, name: 'Sara', grade:100 },
        { id: 2021170240, name: 'Aya', grade:100 },

     ]
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
 public getCourses(){
  return this.courses;
}
}
