import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  
  getInfoTimes(time: string = ""): Observable<any> {
  let params = new HttpParams()
  params = params.append("time", time.toString())
  console.log(time)
  return this.http.get(`${this.API_URL}/api/info`,  { params } );
  }

  getConfrontos(time1:string = "", time2: string =""): Observable<any>{
    let params = new HttpParams()
    params = params.append("time1", time1.toString())
    params = params.append("time2", time2.toString())
    console.log(params.toString())

    return this.http.get(`${this.API_URL}/api/confrontos`, { params })
  }
}

