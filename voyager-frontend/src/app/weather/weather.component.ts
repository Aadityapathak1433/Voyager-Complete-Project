import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() defaultLocation: string = 'New Delhi';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  weatherData: any;

  constructor(private weatherService: WeatherService) {
    this.loadWeatherData(this.defaultLocation); 
  }

  loadWeatherData(location: string): void {
    this.weatherService.getWeather(location).subscribe((data) => {
      this.weatherData = data;
    });
  }

  searchLocation(location: string): void {
    console.log('Search location:', location);
    this.loadWeatherData(location);
    this.search.emit(location);
  }

  
  
}
