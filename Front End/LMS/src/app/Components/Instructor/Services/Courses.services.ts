import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class CoursesServices{
 private courses = [
    {
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Angular Course',
      description: 'Front-end Course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Node.js Course',
      description: 'Little description about Node.js course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Node.js Course',
      description: 'Little description about Node.js course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'Node.js Course',
      description: 'Little description about Node.js course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'React.js Course',
      description: 'Little description about React course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'React.js Course',
      description: 'Little description about React course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'React.js Course',
      description: 'Little description about React course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
    {
      title: 'ASP.NET MVC Core',
      description: 'Little description about .NET course',
      image: "../../../../assets/angular.webp"
    },
  ];
 public getCourses(){
  return this.courses;
}
}
