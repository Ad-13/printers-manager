import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { Printer } from '../interfaces/printer';

import { MOCK_URL } from '../constants/constants';
import { HTTP_OPTIONS } from '../constants/constants';

import {
	handleError
} from '../utils/utils'
 
@Injectable()
export class PrinterService {

  constructor(private http: HttpClient) { }

  getPrinters(): Observable<Printer[]> {
    return this.http.get<Printer[]>(MOCK_URL).pipe(
      catchError(handleError<Printer[]>('getPrinters', []))
    );
  }

  getPrinter(id: number): Observable<Printer> {
    const url = `${MOCK_URL}/${id}`;
    return this.http.get<Printer>(url).pipe(
      catchError(handleError<Printer>(`getPrinter id=${id}`))
    );
  }

  addPrinter(printer: Printer): Observable<Printer> {
    return this.http.post<Printer>(MOCK_URL, printer, HTTP_OPTIONS).pipe(
      catchError(handleError<Printer>('addPrinter'))
    );
  }

  deletePrinter(printer: Printer | number): Observable<Printer> {
    const id = typeof printer === 'number' ? printer : printer.id;
    const url = `${MOCK_URL}/${id}`;

    return this.http.delete<Printer>(url, HTTP_OPTIONS).pipe(
      catchError(handleError<Printer>('deletePrinter'))
    );
  }

  updatePrinter (printer: Printer): Observable<any> {
    const url = `${MOCK_URL}/${printer.id}`;
    return this.http.put(url, printer, HTTP_OPTIONS).pipe(
      catchError(handleError<any>('updatePrinter'))
    );
  }
}
