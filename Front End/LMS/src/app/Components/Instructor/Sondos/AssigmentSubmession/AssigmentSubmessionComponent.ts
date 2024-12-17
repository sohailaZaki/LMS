import { Component, OnInit } from '@angular/core';
import { StudentsServices } from '../../Services/Students.service';
import { CoursesServices } from '../../Services/Courses.services';
import { AssigmentsService } from '../../Services/Assigments.service';
import { ActivatedRoute } from '@angular/router';
interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-AssigmentSubmession',
  templateUrl: './AssigmentSubmessionComponent.html',
  standalone:false,
  styleUrls: ['./AssigmentSubmessionComponent.css']
})

export class AssigmentSubmessionComponent implements OnInit {

  assignments: any[] = [];
courseAssignments:any[]=[];
assignmentService:AssigmentsService=new AssigmentsService();
  constructor(private route: ActivatedRoute,private studentsService: StudentsServices) {}
  assignmentId:number=0;
  assignment:any;
  ngOnInit(): void {
    const assignmentIdFromUrl = this.route.snapshot.paramMap.get('id');

  if (assignmentIdFromUrl !== null) {
    // تحويله لعدد صحيح
    this.assignmentId = +assignmentIdFromUrl;
    console.log('Assignment ID from URL:', this.assignmentId);

    // جلب الـ assignments من الطلاب حسب الـ course ID المناسب
    this.assignments = this.studentsService.getAssignmentsByCourse(1);
    // جلب جميع الأسايمنتات من خدمة الـ assignments الخاصة بك
    this.courseAssignments = this.assignmentService.getAssignments();

    // البحث عن الـ assignment الذي يطابق الـ ID من الـ URL في الـ courseAssignments
    this.assignment = this.courseAssignments.find(a => a.id === this.assignmentId);
}
  }

  editGrade(assignment: any): void {
    assignment.isEditing = true;
  }

  saveGrade(assignment: any): void {
    assignment.isEditing = false;
  }
}
