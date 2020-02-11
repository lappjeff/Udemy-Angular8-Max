import { interval, Subscription, Observable } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count += 1;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(count =>
      console.log(count)
    );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
