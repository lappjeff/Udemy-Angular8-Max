import { NgForm } from "@angular/forms";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f", { static: true }) signupForm: NgForm;
  subscriptions = ["Advanced", "Pro", "Basic"];
  defaultSubscription = "Advanced";

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
