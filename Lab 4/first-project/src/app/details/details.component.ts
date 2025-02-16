import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  form = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    email: new FormControl<string>(''),
  });

  // constructor() {
  //   this.route.paramMap.subscribe(params => {
  //     const housingLocationId = Number(params.get('id'));
  //     this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  //   });
  // }

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.form.value.firstName ?? '',
      this.form.value.lastName ?? '',
      this.form.value.email ?? ''
    );
  }
}
