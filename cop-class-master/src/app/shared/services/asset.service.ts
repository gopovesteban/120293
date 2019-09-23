// NG DEPENDENCIES
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
// Fix this after using snippets
import { PoC } from '../interfaces/reuse-catalog.interface';

const assetsUri = 'https://copcr-api.apps1-fm-int.icloud.intel.com';

@Injectable({
    providedIn: 'root'
})
export class AssetService {

    constructor(private http: HttpClient) {

    }

    /* Create, Get all and Update functions for PoC's */

    public createProject(newProject: PoC): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'text/plain');
        const url = assetsUri + '/projects/create';
        const data = newProject;
        return this.http.post(url, data, {
            withCredentials: true,
            headers: headers,
            responseType: 'text'
        });
    }

    public getProjects(): Observable<PoC[]> {
        const url = assetsUri + '/projects/';
        return this.http.get<any[]>(url, { withCredentials: true });
    }

    public updateProject(project: PoC): Observable<any> {
        const url = assetsUri + '/projects/update';
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'text/plain');
        const data = project;
        return this.http.post(url, data, {
            withCredentials: true,
            headers: headers,
            responseType: 'json'
        });
    }

}
