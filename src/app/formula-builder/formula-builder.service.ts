import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormulaBuilderService {
  constructor(private http: HttpClient) {}

  sendText(text: string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:3000/fb/validate_formulae', { formulae: text });
  }
}