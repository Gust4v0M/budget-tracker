import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedPeriod: string = 'day'; 

  chooseColor(period: string) {
    this.selectedPeriod = period;
  }

  getBackgroundColor(period: string): string {
    return this.selectedPeriod === period ? '#00d09e' : '#dff6e2';
  }
}
