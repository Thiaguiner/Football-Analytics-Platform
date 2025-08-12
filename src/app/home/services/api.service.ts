import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'autoprefixer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get(`${this.API_URL}/hello`);
  }

  getTabela(ano: number): Observable<any> {
    console.log(ano)
    return this.http.get(`${this.API_URL}/api/tabela`, { params: { ano } });
  }
}

