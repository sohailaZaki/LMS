import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../../../assignment.service';
import { HttpClient } from '@angular/common/http';  // تأكد من استيراد HttpClient
import { Router } from '@angular/router';
import { UserService } from '../../../Login & Reg/Rahma/services/user.service';

@Component({
  selector: 'app-submission-assignment',
  standalone: false,
  templateUrl: './submission-assignment.component.html',
  styleUrls: ['./submission-assignment.component.css']
})
export class SubmissionAssignmentComponent implements OnInit {
  toastMessage: string = '';
  toastType: string = '';
  assignments: any[] = []; // مصفوفة لتخزين المهام

  showModal = false;
  selectedAssignment: any = null;
  comment = '';
  uploadedFile: File | null = null;
  errorMessage: string | null = null;
  studentId=4; // تعريف studentId هنا

  constructor(
    private assignmentService: AssignmentService,
    private http: HttpClient, // تأكد من إضافة HttpClient هنا
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userData = this.userService.getUserData();
    
    if (userData && userData.userId) {
      // تحويل ID إلى رقم
      this.studentId = Number(userData.userId); // تحويل إلى رقم
    } else {
      console.error('User data is not available or invalid');
    }
    this.loadAssignments(this.studentId); // استدعاء المهام الخاصة بالطالب
  }

  // دالة لتحميل المهام الخاصة بالطالب
  loadAssignments(studentId: number): void {
    this.assignmentService.getAssignments(studentId).subscribe(
      (data) => {
        this.assignments = data; // حفظ البيانات في المصفوفة
      },
      (error) => {
        console.error('Error loading assignments', error);
      }
    );
  }

  openModal(assignment: any) {
    this.selectedAssignment = assignment;
    this.showModal = true;
    this.errorMessage = null;
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
      console.log("Selected file:", file); // تحقق من محتوى الملف
    } else {
      console.log("No file selected");
    }
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;

    setTimeout(() => {
      this.toastMessage = '';
    }, 3000);
  }

  // submitAssignment() {
  //   // تأكد من أن الملف قد تم رفعه
  //   if (!this.uploadedFile) {
  //     this.errorMessage = 'Please upload a file before submitting the assignment.';
  //     return;
  //   }

  //   if (this.selectedAssignment) {
  //     // إنشاء FormData
  //     const formData = new FormData();
  //     formData.append('studentId', this.studentId.toString()); // تحويل studentId إلى string عند الإرسال
  //     formData.append('courseId', this.selectedAssignment.courseId); // استبدال مع قيمة الكورس الحقيقية
  //     formData.append('assignmentId', this.selectedAssignment.id); // استبدال مع قيمة المهمة الحقيقية
  //     formData.append('file', this.uploadedFile); // تأكد من أن الملف موجود هنا

  //     // إرسال البيانات عبر HTTP POST
  //     this.http.post('http://localhost:5137/api/AssignmentSubmission/student-submit', formData)
  //       .subscribe(
  //         (response: any) => {
  //           this.showToast(`Assignment for ${this.selectedAssignment.assignmentName} submitted successfully!`, 'success');
  //           this.closeModal();
  //         },
  //         (error) => {
  //           this.showToast('Error submitting assignment', 'error');
  //           console.error('Error:', error);
  //         }
  //       );
  //   }
  // }

    submitAssignment() {
    if (!this.comment && !this.uploadedFile) {
      this.errorMessage = 'Please upload a file before submitting the assignment.';
      return;
    }

    if (this.selectedAssignment) {
      // Update the assignment status to "Submitted"
      this.selectedAssignment.status = 'Submitted';
      this.showToast(`Assignment for ${this.selectedAssignment.subject} submitted successfully!`, 'success');
      this.closeModal();
    }
  }
}
