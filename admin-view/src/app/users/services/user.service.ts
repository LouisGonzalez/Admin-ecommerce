import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';

const URL = 'https://adminecommerce.herokuapp.com/api/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = null;
  userSession: any;

  constructor(private httpClient: HttpClient) { }

  setUserSesion(val: boolean){
    this.userSession = val;
  }

  getIdentity(){
    let user = JSON.parse(localStorage.getItem('user')!);
    if(user != undefined){
      this.user = user;
    } else {
      this.user = null;
    }
    return this.user;
  }

  login(username: string, password: string): Observable<any> {
    let body = { username: username, password: password }
    console.log(username);
    let a = this.httpClient.post(`${URL}/login`, body);
    return a;
  }

  get(id: string): Observable<any>{
    return this.httpClient.get(`${URL}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  update2(user: User){
    return this.httpClient.put(`${URL}/${user.id}`, user).pipe(
      catchError(this.handleError)
    )
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Client error ', error.error.message);
    } else {
      console.log('Error status: ', error);
      console.log('Error: ', error.error);
    }
    return throwError('Cannot perform the request, please try again later');
  }

}
