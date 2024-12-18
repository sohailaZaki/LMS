import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:5137/api/GetStudentCourses'; // تعديل الرابط حسب الـ API

  constructor(private http: HttpClient) {}

  getStudentCourses(studentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/student/${studentId}/courses`);
  }
}
