/*
* File: api.service.ts
* Author: Gubis Zsombor Dániel
* Copyright: 2023, Gubis Zsombor Dániel
* Group: Szoft_II_N
* Date: 2023-03-08
* Github: https://github.com/zsomi4/
* Licenc: GNU GPL
*/
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
