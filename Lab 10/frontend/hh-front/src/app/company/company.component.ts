import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { SiteService } from '../site.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companies: Company[] =[];
  serv = inject(SiteService)

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    this.serv.getCompanies().subscribe({
      next: (companies: Company[]) => {
        this.companies = companies;  // Присваиваем список компаний
      },
      error: (err) => {
        console.error('Ошибка при загрузке компаний:', err);
      }
    })
  }

 goVacancy(id:number):void {
  this.router.navigate(['companies', id, 'vacancies'])
 }
}
