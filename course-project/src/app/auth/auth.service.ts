import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { User } from "./user.model";
import { environment } from "../../environments/environment";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "./store/auth.actions";
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
  constructor(private store: Store<fromApp.AppState>) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearInterval(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
