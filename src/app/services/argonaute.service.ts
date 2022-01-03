import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Argonaute {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ArgonauteService {
  api_url = 'http://localhost:9000/';

  constructor(private http: HttpClient) { }

  addArgonautes(argonautes: Argonaute) {
    return this.http.put(this.api_url + 'argonautes', argonautes)
  }

  getArgonautes(): Observable<any> {
    return this.http.get<any>(this.api_url + 'argonautes');
  }
}
