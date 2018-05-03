import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    console.error(error);

    return of(result as T);
  };
}

export function onlyNumbers(control: AbstractControl): ValidationErrors | null {
    const forbidden = isNaN(control.value);
    return forbidden ? {'onlyNumbers': true} : null;
}

export function validIP(control: AbstractControl): ValidationErrors | null {
  if ( !control.value ) {
    return null;
  }
  //Check Format
  var ip = control.value.split(".");

  if (ip.length != 4) {
      return {'validIP': true};
  }

  //Check Numbers
  for (var c = 0; c < 4; c++) {
      //Perform Test
      if ( ip[c] <= -1 || ip[c] > 255 || 
           isNaN(parseFloat(ip[c])) || 
           !isFinite(ip[c])  || 
           ip[c].indexOf(" ") !== -1 ) {

            return {'validIP': true};
      }
  }
  return null;
}
