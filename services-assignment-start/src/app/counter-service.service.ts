import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  aToICount: number;
  iToACount: number;

  constructor() {}

  incrementAToICount() {
    this.aToICount += 1;
  }

  incrementIToACount() {
    this.iToACount += 1;
  }
}
