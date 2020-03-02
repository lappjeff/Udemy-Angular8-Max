import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import { switchMap, catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { AuthResponseData } from "../auth.service";
import { environment } from "../../../environments/environment";
import { of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(
          `${environment.fireBaseLoginUrl}${environment.fireBaseApiKey}`,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          }
        )
        .pipe(
          map(resData => {
            const expirationDate = new Date(
              new Date().getTime() + parseInt(resData.expiresIn) * 1000
            );

            of(
              new AuthActions.Login({
                email: resData.email,
                userId: resData.localId,
                token: resData.idToken,
                expirationDate
              })
            );
          }),
          catchError(error => {
            return of();
          })
        );
    })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
