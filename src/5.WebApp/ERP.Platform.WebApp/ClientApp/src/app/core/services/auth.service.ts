import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IJsonRes<T> {
  data: T;
  isSuccess: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = `api/Auth/`;

  getAll(): Observable<IJsonRes<string[]>> {
    return this.http.get<IJsonRes<string[]>>(this.baseUrl);
  }

  getById(id: number): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/${id}`);
  }

  search(userId: number): Observable<string[]> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<string[]>(this.baseUrl, { params });
  }

  create(post: Omit<string, 'id'>): Observable<string> {
    return this.http.post<string>(this.baseUrl, post);
  }

  update(id: number, post: Partial<string>): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${id}`, post);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
