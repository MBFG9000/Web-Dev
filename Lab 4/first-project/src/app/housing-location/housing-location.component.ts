import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
