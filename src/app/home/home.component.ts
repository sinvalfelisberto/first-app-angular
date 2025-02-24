import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, HousingLocationComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <app-housing-location></app-housing-location>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
