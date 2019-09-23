import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Intel Worker API
const workersUri = 'https://worker-api.apps1-fm-int.icloud.intel.com';

@Injectable({
  providedIn: 'root'
})
export class WorkerApiService {

  constructor(private http: HttpClient) { }

  public getWorkers(value: string): Observable<any> {
    const url = workersUri + '/v1/workers?q=' + value;
    return this.http.get<any[]>(url, { withCredentials: true });
  }

}
