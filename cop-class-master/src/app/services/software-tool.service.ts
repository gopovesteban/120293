import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareToolService {

  constructor(private http: HttpClient) { }

  getSoftwareTools(): Observable<any[]> {
    const url = 'http://localhost:8080/fusa/software/find-all';
    return this.http.get<any[]>(url);
  }
}
