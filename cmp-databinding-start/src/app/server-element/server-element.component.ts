import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  @Input("svrElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  constructor() {
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("nginit called");
  }
}
