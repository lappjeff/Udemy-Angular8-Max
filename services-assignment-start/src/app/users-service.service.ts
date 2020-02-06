import { Injectable } from "@angular/core";
import { CounterService } from "./counter-service.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  activeUsers: string[] = ["Max", "Anna"];
  inactiveUsers: string[] = ["Chris", "Manu"];

  constructor(private counterService: CounterService) {}

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementAToICount();
  }

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementIToACount();
  }
}
