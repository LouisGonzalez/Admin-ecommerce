import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Switch } from '../models/switch';

const URL = 'https://adminecommerce.herokuapp.com/api/switch'

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor(private httpClient: HttpClient) { }

  get(id: string): Observable<any>{
    return this.httpClient.get(`${URL}/${id}`).pipe(
      catchError(this.handleError)
  )
  }
  
  update(sw: Switch){
    console.log(`${URL}/1`)
    return this.httpClient.put(`${URL}/${sw.id}`, sw).subscribe(data => {
      //console.log(data)
    })
  }
  

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Client error ', error.error.message);
    } else {
      console.log('Error status: ', error.status);
      console.log('Error: ', error.error);
    }
    return throwError('Cannot perform the request, please try again later');
  }

}
