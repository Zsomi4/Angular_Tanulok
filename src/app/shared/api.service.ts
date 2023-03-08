import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStudents() {
    let endpoint = 'students'
    let url = environment.api + endpoint;
    return this.http.get<any>(url);
  }

  getScores() {
    let endpoint = 'scores'
    let url = environment.api + endpoint;
    return this.http.get<any>(url);
  }
}
