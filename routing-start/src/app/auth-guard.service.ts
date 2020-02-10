import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService
      .isAuthenticated()
      .then((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(["/"]);
        }
      });
  }

  constructor(private authService: AuthService, private router: Router) {}
}
