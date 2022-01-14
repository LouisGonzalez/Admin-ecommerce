import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'https://adminecommerce.herokuapp.com/api/report'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    let a = this.httpClient.get(`${URL}`);
    return a;
  }

}
