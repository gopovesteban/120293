import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignToolService {

  constructor(private http: HttpClient) { }

  getDesignTools(): Observable<any[]> {
    const url = 'http://localhost:8080/fusa/design/find-all';
    return this.http.get<any[]>(url);
  }
}
