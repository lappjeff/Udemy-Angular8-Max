import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-gamecontrol",
  templateUrl: "./gamecontrol.component.html",
  styleUrls: ["./gamecontrol.component.css"]
})
export class GamecontrolComponent implements OnInit {
  interval;
  intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber += 1;
    }, 1000);
  }
}
