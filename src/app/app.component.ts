import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const API_URL = "https://randomuser.me/api/?results=15";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-interview-angular';
}
