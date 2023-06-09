import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ListItemsServices {
  constructor(private http:HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/lists/1');
  }
}
