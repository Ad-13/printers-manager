import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of ,  Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Printer } from '../interfaces/printer';

import { MOCK_URL } from '../constants/constants';
import { HTTP_OPTIONS } from '../constants/constants';

import {
  handleError
} from '../utils/utils';

@Injectable()
export class PrinterService {
  newPrinterObserver = new Subject<string>();

  constructor(private http: HttpClient) { }

  public emitNewPrinterObserver(searchText: string): void {
    this.newPrinterObserver.next(searchText);
  }

  public subscribeNewPrinterObserver(): Observable<string> {
    return this.newPrinterObserver.asObservable();
  }

  getPrinters(query?: any): Observable<Printer[]> {
    const url = `${MOCK_URL}/${query ? '?q=' + query : ''}`;
    return this.http.get<Printer[]>(url).pipe(
      catchError(handleError<Printer[]>('getPrinters', []))
    );
  }

  getPrinterById(id: number): Observable<Printer> {
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

  searchPrinters(term: string): Observable<Printer[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Printer[]>(`${MOCK_URL}/?name=${term}`).pipe(
      catchError(handleError<Printer[]>('searchPrinters', []))
    );
  }
}
