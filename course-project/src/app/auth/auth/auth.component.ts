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

    if (this.isLoginMode) {
      // log in
    } else {
      this.authService.signUp(email, password).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }

    form.reset();
  }
}
