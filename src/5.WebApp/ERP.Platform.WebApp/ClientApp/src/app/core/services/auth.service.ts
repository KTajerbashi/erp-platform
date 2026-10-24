
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IJsonRes<T> {
  data: T;
  isSuccess: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private baseUrl = 'api/Auth';

  getAll(): Observable<IJsonRes<string[]>> {

    const params = new HttpParams()
      .set('second', 50);

    return this.http.get<IJsonRes<string[]>>(
      this.baseUrl,
      {
        params,
        timeout: 60000
      }
    );
  }

  getById(id: number): Observable<string> {

    return this.http.get<string>(
      `${this.baseUrl}/${id}`,
      {
        timeout: 60000
      }
    );
  }

  search(userId: number): Observable<string[]> {

    const params = new HttpParams()
      .set('userId', userId);

    return this.http.get<string[]>(
      this.baseUrl,
      {
        params,
        timeout: 60000
      }
    );
  }

}
