import { Component, OnInit } from "@angular/core";

@Component({
  // select by html selector
  selector: "app-servers",
  // select by attribute
  // selector: "[app-servers]",
  // select by classname
  // selector: ".app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
