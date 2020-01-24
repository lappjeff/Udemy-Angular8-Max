import { Component, OnInit } from "@angular/core";

@Component({
  // select by html selector
  selector: "app-servers"
  // select by attribute
  // selector: "[app-servers]",
  // select by classname
  // selector: ".app-servers",
  template: `
    <app-server></app-server> <app-server></app-server>
  `,
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
