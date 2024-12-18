import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../Login & Reg/Rahma/services/auth.service';
import { UserService } from '../../Login & Reg/Rahma/services/user.service';

@Component({
  selector: 'app-course-materials',
  standalone: false,
  templateUrl: './course-materials.component.html',
  styleUrls: ['./course-materials.component.css']
})
export class CourseMaterialsComponent {
  selectedLecture: any; // سيتم تخزين المحاضرة المختارة هنا
  selectedLabs: any = null;

  courses = [
    {
      id: '1',
      title: 'Angular Course',
      description: 'Detailed description about Angular course',
      image: 'assets/channels4_profile.jpg',
      progress: 5,
      lectures: [
        { name: "Angular Basics", pdfUrl: "assets/A01.pdf" },
        { name: "Angular Directives", pdfUrl: "assets/A01.pdf" },
        { name: "Angular Components", pdfUrl: "assets/A01.pdf" }      
      ],
      labs: [
        { name: "Node Basics", pdfUrl: "assets/A01.pdf" },
        { name: "Node.js API", pdfUrl: "assets/A01.pdf" }
      ],
      assessment: [
        { name: "Node Basics", pdfUrl: "assets/A01.pdf" },
        { name: "Node.js API", pdfUrl: "assets/A01.pdf" }
      ]
    },
    {
      id: '2',
      title: 'Node.js',
      description: 'Detailed description about Node course',
      image: 'assets/channels4_profile.jpg',
      progress: 75, 
      lectures: [
        { name: "Node Basics", pdfUrl: "assets/A01.pdf" },
        { name: "Node.js API", pdfUrl: "assets/A01.pdf" }
      ],
      labs: [
        { name: "Node Basics", pdfUrl: "assets/A01.pdf" },
        { name: "Node.js API", pdfUrl: "assets/A01.pdf" }
      ],
      assessment: [
        { name: "Node Basics", pdfUrl: "assets/A01.pdf" },
        { name: "Node.js API", pdfUrl: "assets/A01.pdf" }
      ]

    },
    // باقي الكورسات هنا
  ];

  constructor(private router: Router) {}

  
  navigateToCourse(course: any) {
    this.router.navigate(['/dashboard/course-detail', course.id], { state: { courseDetails: course } });
  }
}
