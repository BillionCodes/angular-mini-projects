import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  lst = ['Him', 'Her', 'You', 'them']
  postIt(body: any): Observable<any[]> {
    return this.http.get<any[]>(body);
  }
}
