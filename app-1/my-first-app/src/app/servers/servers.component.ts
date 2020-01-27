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
  allownewServer: boolean = false;
  serverCreationStatus: string = "";
  serverName: string = "";
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}.`;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
