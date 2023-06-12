import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) {}
  
  postData(data: any): Observable<any> {
    const url = 'http://localhost:3000/api/todos';

    return this.http.post(url, data);
  }
}
