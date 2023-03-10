import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }


  getUserData$(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
