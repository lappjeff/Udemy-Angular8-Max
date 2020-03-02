import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { LoggingService } from "./logging.service";
import * as fromApp from "./store/app.reducer";
import * as AuthActions from "./auth/store/auth.actions";
import { Store } from "@ngrx/store";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private logService: LoggingService,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
    this.logService.printLog("Hello from app component ngOnit");
  }
}
