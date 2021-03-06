import { PlaceHolderDirective } from "../../shared/placeholder/placeholder.directive";
import { AuthResponseData } from "./../auth.service";
import { NgForm } from "@angular/forms";
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { AuthService } from "../auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "src/app/shared/alert/alert.component";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;
  private closeSub: Subscription;

  ngOnInit() {}

  ngOnDestroy() {
    if (this.closeSub) this.closeSub.unsubscribe();
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const [email, password] = [form.value.email, form.value.password];

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    this.isLoading = true;
    authObs.subscribe(
      data => {
        console.log(data);
        this.isLoading = false;
        this.router.navigate(["./recipes"]);
      },
      errorMessage => {
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    console.log(this.alertHost);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
