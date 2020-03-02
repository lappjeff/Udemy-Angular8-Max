import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import * as authActions from "./store/auth.actions";
export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: "root"
})
export class AuthService {
  signUpUrl = `${environment.firebaseSignUpUrl}${environment.fireBaseApiKey}`;
  loginUrl = `${environment.fireBaseLoginUrl}${environment.fireBaseApiKey}
`;
  private tokenExpirationTimer: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signUpUrl, {
        email,
        password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap(data => {
          this.handleAuth(
            data.email,
            data.localId,
            data.idToken,
            parseInt(data.expiresIn)
          );
        })
      );
  }

  logout() {
    // this.user.next(null);
    this.store.dispatch(new authActions.Logout());
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.loginUrl, {
        email,
        password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap(data => {
          this.handleAuth(
            data.email,
            data.localId,
            data.idToken,
            parseInt(data.expiresIn)
          );
        })
      );
  }

  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, userId, token, expirationDate);
    // this.user.next(user);
    this.store.dispatch(
      new authActions.AuthenticateSuccess({
        email,
        userId,
        token,
        expirationDate
      })
    );
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem("userData", JSON.stringify(user));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      // this.user.next(loadedUser);
      this.store.dispatch(
        new authActions.AuthenticateSuccess({
          email: loadedUser.email,
          userId: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpirationDate)
        })
      );
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknow error occurred.";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email already exists!";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email does not exist!";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "This password is not correct!";
        break;
    }
    return throwError(errorMessage);
  }
}
