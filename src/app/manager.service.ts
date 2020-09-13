import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  status(namespace: string) {
    return this.http.get('http://localhost:8899/status', {
      params: {},
    });
  }
  release(namespace: string) {
    return this.http.get('http://localhost:8899/list', {
      params: {},
    });
  }
}
