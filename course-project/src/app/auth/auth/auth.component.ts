import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const [email, password] = [form.value.email, form.value.password];

    this.isLoading = true;
    if (this.isLoginMode) {
      // log in
    } else {
      this.authService.signUp(email, password).subscribe(
        data => {
          console.log(data);
          this.isLoading = false;
        },
        errorMessage => {
          console.log(errorMessage);

          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}
