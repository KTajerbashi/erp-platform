import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IJsonRes<T> {
  data: T;
  isSuccess: boolean;
  message: string;
}

export interface IWeatherForecast {
  date: string;
  temperatureC: string;
  temperatureF: string;
  summary: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private baseUrl = 'https://localhost:7040/WeatherForecast';
  // private baseUrl = '/api/Auth';

  getAll(): Observable<IWeatherForecast[]> {
    console.log('😂  GetAll', new Date());
    return this.http.get<IWeatherForecast[]>(this.baseUrl);
  }

  getById(id: number): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/${id}`, {
      timeout: 60000,
    });
  }

  search(userId: number): Observable<string[]> {
    const params = new HttpParams().set('userId', userId);

    return this.http.get<string[]>(this.baseUrl, {
      params,
      timeout: 60000,
    });
  }
}
