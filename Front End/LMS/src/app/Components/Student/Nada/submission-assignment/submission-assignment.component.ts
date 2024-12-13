import { Component } from '@angular/core';

@Component({
  selector: 'app-submission-assignment',
  standalone: false,
  templateUrl: './submission-assignment.component.html',
  styleUrls: ['./submission-assignment.component.css']
})
export class SubmissionAssignmentComponent {
  assignments = [
    {
      subject: 'Mathematics',
      deadline: '2024-12-10',
      status: 'Pending',
      description: 'This is the final exam of the mathematics course, covering algebra, calculus, and statistics.',
      attachments: [
        { name: 'Math_Study_Guide.pdf', url: 'path/to/Math_Study_Guide.pdf' },
      ]
    },{
      subject: 'Mathematics',
      deadline: '2024-12-10',
      status: 'Pending',
      description: 'This is the final exam of the mathematics course, covering algebra, calculus, and statistics.',
      attachments: [
        { name: 'Math_Study_Guide.pdf', url: 'path/to/Math_Study_Guide.pdf' },
      ]
    },{
      subject: 'Mathematics',
      deadline: '2024-12-10',
      status: 'Pending',
      description: 'This is the final exam of the mathematics course, covering algebra, calculus, and statistics.',
      attachments: [
        { name: 'Math_Study_Guide.pdf', url: 'path/to/Math_Study_Guide.pdf' },
      ]
    },{
      subject: 'Mathematics',
      deadline: '2024-12-10',
      status: 'Pending',
      description: 'This is the final exam of the mathematics course, covering algebra, calculus, and statistics.',
      attachments: [
        { name: 'Math_Study_Guide.pdf', url: 'path/to/Math_Study_Guide.pdf' },
      ]
    },{
      subject: 'Mathematics',
      deadline: '2024-12-10',
      status: 'Pending',
      description: 'This is the final exam of the mathematics course, covering algebra, calculus, and statistics.',
      attachments: [
        { name: 'Math_Study_Guide.pdf', url: 'path/to/Math_Study_Guide.pdf' },
      ]
    },{
      subject: 'Mathematics',
      deadline: '2024-12-10',
      status: 'Pending',
      description: 'This is the final exam of the mathematics course, covering algebra, calculus, and statistics.',
      attachments: [
        { name: 'Math_Study_Guide.pdf', url: 'path/to/Math_Study_Guide.pdf' },
      ]
    },
    {
      subject: 'Physics',
      deadline: '2024-12-12',
      status: 'Submitted',
      description: 'This assignment covers the topic of thermodynamics.',
      attachments: [
        { name: 'Physics_Thermodynamics.pdf', url: 'path/to/Physics_Thermodynamics.pdf' }
      ]
    },
    {
      subject: 'Chemistry',
      deadline: '2024-12-15',
      status: 'Pending',
      description: 'Chemistry assignment on chemical reactions and bonding.',
      attachments: [
        { name: 'Chemistry_Notes.pdf', url: 'path/to/Chemistry_Notes.pdf' }
      ]
    }
  ].map(item => ({
    ...item,
    status: item.status || 'Pending'
  }));

  showModal = false;
  selectedAssignment: any = null;
  comment = '';
  uploadedFile: File | null = null;
  errorMessage: string | null = null;

  openModal(assignment: any) {
    this.selectedAssignment = assignment;
    this.showModal = true;
    this.errorMessage = null; // Reset error message when modal is opened
  }

  closeModal() {
    this.showModal = false;
    this.selectedAssignment = null;
    this.comment = '';
    this.uploadedFile = null;
    this.errorMessage = null;
  }

  handleFileUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
    }
  }

  submitAssignment() {
    if (!this.comment && !this.uploadedFile) {
      this.errorMessage = 'Please upload a file before submitting the assignment.';
      return;
    }

    if (this.selectedAssignment) {
      // Update the assignment status to "Submitted"
      this.selectedAssignment.status = 'Submitted';
      alert(`Assignment for ${this.selectedAssignment.subject} submitted successfully!`);
      this.closeModal();
    }
  }
}
