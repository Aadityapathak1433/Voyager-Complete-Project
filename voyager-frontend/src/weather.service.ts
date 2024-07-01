import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '895284fb2d2c50a520ea537456963d9c'; 

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
