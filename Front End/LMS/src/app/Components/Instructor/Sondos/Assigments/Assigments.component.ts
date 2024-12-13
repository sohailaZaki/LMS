import { Component, OnInit } from '@angular/core';
import { AssigmentsService } from '../../Services/Assigments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Assigments',
  templateUrl: './Assigments.component.html',
  styleUrls: ['./Assigments.component.css'],
})
export class AssigmentsComponent implements OnInit {
  assigmentsServices: AssigmentsService = new AssigmentsService();
  constructor(
    private router: Router,
    private assignmentsService: AssigmentsService
  ) {}

  navigateToAssignment(assignment: any) {
    this.router.navigate(['/Instructor/Assigments', assignment.id], {
      state: { assignment: assignment },
    });
  }
  assignments: { title: string; description: string; image: string }[] = [];
  ngOnInit() {
    this.assignments = this.assignmentsService.getAssignments();
  }
}
