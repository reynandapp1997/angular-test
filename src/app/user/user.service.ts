import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser = () => {
    return this.http.get('https://5dce3c16d795470014e4d661.mockapi.io/api/user');
  }
}
