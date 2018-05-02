import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Printer } from '../interfaces/printer';

import { MOCK_URL } from '../constants/constants';
 
@Injectable()
export class PrinterService {

  constructor(private http: HttpClient) { }

  getPrinters() {
    return this.http.get<Printer[]>(MOCK_URL);
  }
}
