import { HttpHeaders } from '@angular/common/http';

export const MOCK_URL = 'http://localhost:3000/printers';
export const HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};