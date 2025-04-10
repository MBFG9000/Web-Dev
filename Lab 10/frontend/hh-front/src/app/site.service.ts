import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  private apiUrl = 'http://localhost:8000/api/';  // URL вашего API (настройте по необходимости)

  constructor(private http: HttpClient) {}

  // Получаем список всех компаний
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl + 'companies/');
  }

  // Получаем вакансии для выбранной компании
  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${companyId}/vacancies/`);
  }
}
