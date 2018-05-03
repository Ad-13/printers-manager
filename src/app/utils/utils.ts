import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    console.error(error);

    return of(result as T);
  };
}

