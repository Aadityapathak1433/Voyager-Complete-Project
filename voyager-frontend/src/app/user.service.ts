import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8008/api/v1/admin";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.baseURL}`);
  }
  getUserById(id: number): Observable<Users>{
    return this.httpClient.get<Users>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id: number, user: Users): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
