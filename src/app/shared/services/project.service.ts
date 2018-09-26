import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    constructor(private http: HttpClient) { }

    header() {
        return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    bid(project): Observable<any> {
        return this.http.post('http://localhost:3000/bid', project, { headers: this.header() });
    }
    bids(email): Observable<any> {
        return this.http.post('http://localhost:3000/bids', { email }, { headers: this.header() });
    }
}