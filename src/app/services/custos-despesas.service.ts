import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces/periodic-element';
import { MonthsElements } from '../interfaces/months-elements';

@Injectable({
  providedIn: 'root',
})
export class CustosDespesasService {
  elementApiUrl = 'api/custosDespesas';
  constructor(private http: HttpClient) {}

  getCustosDespesas(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementApiUrl);
  }

  createCustoDespesa(element: PeriodicElement): Observable<PeriodicElement[]> {
    return this.http.post<PeriodicElement[]>(this.elementApiUrl, element);
  }

  getCustosDespesasValores(
    element: MonthsElements
  ): Observable<MonthsElements[]> {
    return this.http.get<MonthsElements[]>(`api/custosDespesas/${element}`);
  }

  createCustosDespesasValores(
    element: MonthsElements
  ): Observable<MonthsElements[]> {
    return this.http.put<MonthsElements[]>(
      `api/custosDespesas/${element.id}`,
      element
    );
  }
}
