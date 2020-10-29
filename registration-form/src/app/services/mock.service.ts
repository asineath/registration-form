import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(
    public http: HttpClient
  ) { }

  public postRegistration(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data).pipe(map(response => { return response; }));
  }
}
