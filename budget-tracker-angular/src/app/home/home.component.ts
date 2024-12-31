
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  implements OnInit{

  constructor(public service: ServicesService){  }

  result$!: any;

  ngOnInit(): void {
      this.service.list().subscribe((res: any) =>
        this.result$ = res.flatMap((user: any) => user.transactions)
    );
  }


  selectedPeriod: string = 'day';
  chooseColor(period: string) {
    this.selectedPeriod = period;
  }

  getBackgroundColor(period: string): string {
    return this.selectedPeriod === period ? '#00d09e' : '#dff6e2';
  }

}
