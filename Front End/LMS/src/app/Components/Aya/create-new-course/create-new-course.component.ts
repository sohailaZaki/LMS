import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-course',
  templateUrl: './create-new-course.component.html',
  styleUrl: './create-new-course.component.css'
})
export class CreateNewCourseComponent {
  courseForm: FormGroup;
  instructors = ['Instructor 1', 'Instructor 2', 'Instructor 3']; 
  previewImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseCode: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      instructor: ['', Validators.required],
      lectureTime: ['', Validators.required],
      lectureLocation: ['', Validators.required],
    });
  }

  onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

 
  onDrop(event: DragEvent): void {
    event.preventDefault(); 
    if (event.dataTransfer?.files) {
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.courseForm.valid) {
      const formData = {
        ...this.courseForm.value,
        courseImage: this.previewImage,
      };
      console.log('Course Data:', formData);
      alert('Course created successfully!');
    }
  }

}
