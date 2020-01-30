import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  @Input("svrElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("header", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {}

  ngOnInit() {
    console.log("nginit called");
  }
}
