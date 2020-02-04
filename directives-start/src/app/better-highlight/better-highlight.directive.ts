import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  @HostListener("mouseleave") mouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = "transparent";
  }

  @HostListener("mouseenter") mouseOver(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = "blue";
  }
}
