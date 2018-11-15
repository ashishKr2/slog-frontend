import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  authToken: any;
  user: any;
  public profile: boolean = false;
  public dashboard: boolean = false;
  public myProject: boolean=false;
  public inbox:boolean=false;
  public activeWork:boolean=false;

  public loadingObserable: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  header() {
    return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  signup(user): Observable<any> {
    return this.http.post('http://localhost:3000/signup', user, { headers: this.header() });
  }

  login(user): Observable<any> {
    return this.http.post('http://localhost:3000/login', user, { headers: this.header() });
  }

  forgetPassword(user): Observable<any> {
    return this.http.post('http://localhost:3000/forgetPassword', user, { headers: this.header() });
  }

  resetPassword(password): Observable<any> {
    return this.http.put('http://localhost:3000/resetPassword', password, { headers: this.header() });
  }

  verifivationEmail(data): Observable<any> {
    return this.http.post('http://localhost:3000/verification', data, { headers: this.header() });
  }

  getProfile(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    return this.http.get('http://localhost:3000/profile', { headers: headers })
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  checkStorage() {
    if (window.localStorage.length == null) {
      return true;
    }
    else {
      return false;
    }
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  loggedIn() {
    return this.authToken;
  }


  LogOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  postProject(project): Observable<any> {
    return this.http.post('http://localhost:3000/postProject', project, { headers: this.header() });
  }
  browseJob(sl): Observable<any> {
    return this.http.post('http://localhost:3000/browseJob', sl, { headers: this.header() });
  }
}