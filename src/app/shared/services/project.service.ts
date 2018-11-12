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
    myproject(username): Observable<any> {
        return this.http.post('http://localhost:3000/myProject', { username }, { headers: this.header() });

    }
    getProjectOwner(project_bidder):Observable<any>{
        return this.http.post('http://localhost:3000/getProjectOwner',{project_bidder},{ headers: this.header() });
    }
    getProjectBidder(project_owner):Observable<any>{
        return this.http.post('http://localhost:3000/getProjectBidder',{project_owner},{ headers: this.header() });
    }
    chat(data):Observable<any>{
        return this.http.post('http://localhost:3000/chat',data,{ headers: this.header() });
    }
    getChat(data):Observable<any>{
        return this.http.post('http://localhost:3000/getChat',data,{ headers: this.header() });
    }
    search(keyword):Observable<any>{
        return this.http.post('http://localhost:3000/keyword',keyword,{ headers: this.header() });
    }
}