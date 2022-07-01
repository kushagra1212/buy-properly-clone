import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const JWT = 'JWT';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn$: EventEmitter<any>;
  constructor(private _http: HttpClient) {
    this.loggedIn$ = new EventEmitter();
  }

  login(user: { email: string; password: string }) {
    return this._http.post(`${environment.BASE_URL}/user/v1/login`, user).pipe(
      tap((token: any) => this.addToken(token.jwttoken)),
      map(() => {
        this.loggedIn$.emit(true);
        return true;
      }),
      catchError(this.handleError)
    );
  }
  logOut() {
    this.removeToken();
  }
  isLoggedIn() {
    return localStorage.getItem(JWT);
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return of(false);
  }
  addToken(jwtToken: string) {
    localStorage.setItem(JWT, jwtToken);
  }
  removeToken() {
    localStorage.removeItem(JWT);
  }
}
