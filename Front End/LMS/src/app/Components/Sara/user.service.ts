import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5137/api/Admin'; // Updated URL

  constructor(private http: HttpClient) {}

  // Fetch all users with optional filters
  getUsers(role: string = '', status: string = ''): Observable<any> {
    return this.http.get(`${this.apiUrl}/users?role=${role}&status=${status}`);
  }

  // Approve a user
  approveUser(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/approve/${id}`, {});
  }

  // Deactivate a user
  deactivateUser(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/deactivate/${id}`, {});
  }

  // Delete a user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/delete/${id}`);
  }
}
