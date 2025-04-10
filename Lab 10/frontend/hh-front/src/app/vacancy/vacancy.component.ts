import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Vacancy } from '../../models/vacancy.model';
import { SiteService } from '../site.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  
  serv = inject(SiteService);

  route2 = inject(Router)
  vacancies: Vacancy[] = [];

  
  companyId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.companyId = +params.get('id')!; 
      this.getVacancies(this.companyId);
    });
  }

  
  getVacancies(companyId: number): void {
    this.serv.getVacanciesByCompany(companyId).subscribe({
      next: (vacancies: Vacancy[]) => {
        this.vacancies = vacancies; 
      },
      error: (err) => {
        console.error('Ошибка при загрузке вакансий:', err); 
      }
    });
  }
  
  returnto() {
    this.route2.navigate(['companies']);
  }
}
