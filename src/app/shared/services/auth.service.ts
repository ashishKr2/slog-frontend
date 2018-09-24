import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) { }

  signup(user): Observable<any> {
    let headers:HttpHeaders  = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/signup', user, { headers: headers });

  }
  login(user): Observable<any> {
    let headers:HttpHeaders  = new HttpHeaders();
    headers=headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/login', user, { headers: headers });
  }
  forgetPassword(user):Observable<any>{
    let headers:HttpHeaders  = new HttpHeaders();
    headers=headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/forgetPassword', user, { headers: headers });
  }
  resetPassword(password):Observable<any>{
    let headers:HttpHeaders  = new HttpHeaders();
    headers=headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/resetPassword',password,{headers:headers});
  }
  verifivationEmail(data):Observable<any>{
    let headers:HttpHeaders  = new HttpHeaders();
    headers=headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/verification',data,{headers:headers});
  }
  getProfile(): Observable<any> {
    let headers:HttpHeaders  = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    return this.http.get('http://localhost:3000/profile', { headers: headers });
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

  postProject(project):Observable<any>{
    let headers:HttpHeaders  = new HttpHeaders();
    headers=headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/postProject',project,{headers:headers});
  }
}