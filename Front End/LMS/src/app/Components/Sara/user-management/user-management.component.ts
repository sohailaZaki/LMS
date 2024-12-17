import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  users = [
    { name: 'Leslie Maya', id: '2021170111', email: 'leslie@gmail.com', status: 'Pending', role: 'Student' },
    { name: 'Josie Deck', id: '2021170222', email: 'josie@gmail.com', status: 'Pending', role: 'Instructor' },
    { name: 'Alex Pfeiffer', id: '2021170333', email: 'alex@gmail.com', status: 'Pending', role: 'Student' },
    { name: 'Mike Dean', id: '2021170444', email: 'mike@gmail.com', status: 'Contributor', role: 'Instructor' },
  ];
constructor(private router: Router) {}
  // Filter options
  roles = ['Student', 'Instructor'];
  statuses = ['Pending', 'Contributor'];

  // Selected filter values
  selectedRole: string = '';
  selectedStatus: string = '';

  // Filtered list
  filteredUsers = [...this.users];

  displayedColumns: string[] = ['name', 'id', 'email', 'status', 'role', 'actions'];

  approveUser(user: any) {
    user.status = 'Contributor';
    this.applyFilters();
  }

  deleteUser(user: any) {
    this.users = this.users.filter((u) => u !== user);
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.users.filter((user) => {
      return (
        (this.selectedRole ? user.role === this.selectedRole : true) &&
        (this.selectedStatus ? user.status === this.selectedStatus : true)
      );
    });
  }

  assignCourse(){
    this.router.navigate(['/Sara/assign-course']);
  }
}


