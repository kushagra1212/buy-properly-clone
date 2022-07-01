import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError, throwError } from 'rxjs';

import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private _http: HttpClient, private store: Store) {}

  getProperties(body: { limit: Number; offset: Number }) {
    return this._http
      .post(`${env.BASE_URL}/search/v1`, body)
      .pipe(catchError(this.handleError));
  }
  getPropertyDetails(propertySlurp: string) {
    return this._http
      .get(`${env.BASE_URL}/property/v1/details/slurp/${propertySlurp}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
