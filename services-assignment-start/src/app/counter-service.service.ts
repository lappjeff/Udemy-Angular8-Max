import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  aToICount: number = 0;
  iToACount: number = 0;

  constructor() {}

  incrementAToICount() {
    this.aToICount += 1;
    console.log(this.aToICount);
  }

  incrementIToACount() {
    this.iToACount += 1;
    console.log(this.iToACount);
  }
}
