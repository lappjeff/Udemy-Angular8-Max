import { map, filter } from "rxjs/operators";
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
    const customIntervalObservable: Observable<any> = Observable.create(
      observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 2) {
            observer.complete();
          }
          if (count > 3) {
            observer.error(new Error("Count is greater than 3!"));
          }
          count += 1;
        }, 1000);
      }
    );

    const roundPipe = customIntervalObservable.pipe(
      filter(data => data > 0),
      map(data => {
        return `Round: ${data + 1}`;
      })
    );
    this.firstObsSubscription = roundPipe.subscribe(
      count => console.log(count),
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log("Completed!");
      }
    );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
