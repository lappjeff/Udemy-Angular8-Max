import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-alert",
  template: `
    <h2 class="bg-success">Success!</h2>
  `
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
