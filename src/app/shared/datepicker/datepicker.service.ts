import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatepickerService {
  constructor(private http: HttpClient) { }
  getFestival(): Observable<any>{
    return this.http.get<any>("http://127.0.0.1:4200/assets/datepicker.json");
  }
}