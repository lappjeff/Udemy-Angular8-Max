import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusOptions = ["Stable", "Critical", "Finished"];

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.forbiddenName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("Stable")
    });
  }

  // forbiddenName(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === "Test") {
  //     return { nameIsForbidden: true };
  //   }
  //   return null;
  // }

  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (control.value === "Test") {
          res({ nameIsForbidden: true });
        } else {
          res(null);
        }
      }, 3000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
