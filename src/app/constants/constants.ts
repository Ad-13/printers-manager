import { HttpHeaders } from '@angular/common/http';

export const MOCK_URL = './assets/printers.json';
export const HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};