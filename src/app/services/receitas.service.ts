import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElementReceitas } from '../interfaces/periodic-elements-receitas';
import { MonthsElements } from '../interfaces/months-elements';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  elementApiUrl = 'api/receitas';
  constructor(private http: HttpClient) {}

  getReceitas(): Observable<PeriodicElementReceitas[]> {
    return this.http.get<PeriodicElementReceitas[]>(this.elementApiUrl);
  }

  createReceita(
    element: PeriodicElementReceitas
  ): Observable<PeriodicElementReceitas[]> {
    return this.http.post<PeriodicElementReceitas[]>(
      this.elementApiUrl,
      element
    );
  }
  getReceitasValores(element: MonthsElements): Observable<MonthsElements[]> {
    return this.http.get<MonthsElements[]>(`api/receitas/${element}`);
  }

  createReceitasValores(element: MonthsElements): Observable<MonthsElements[]> {
    return this.http.put<MonthsElements[]>(`api/receitas/${element}`, element);
  }
}
