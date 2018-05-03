import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Printer } from '../interfaces/printer';

import { MOCK_URL } from '../constants/constants';
import { HTTP_OPTIONS } from '../constants/constants';
 
@Injectable()
export class PrinterService {

  constructor(private http: HttpClient) { }

  getPrinters(): Observable<any> {
    return this.http.get<Printer[]>(MOCK_URL);
  }

  updatePrinters (printer: Printer): Observable<any> {
    return this.http.put(MOCK_URL, printer, HTTP_OPTIONS);
  }

  addPrinter (printer: Printer): Observable<Printer> {
    console.log(printer)
    console.log(HTTP_OPTIONS)
    return this.http.put<Printer>(MOCK_URL, printer, HTTP_OPTIONS);
  }
}
