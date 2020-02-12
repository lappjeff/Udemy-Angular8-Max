import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // activatedEmitter: EventEmitter<boolean> = new EventEmitter();
  activatedEmitter = new Subject<boolean>();
  constructor() {}
}
