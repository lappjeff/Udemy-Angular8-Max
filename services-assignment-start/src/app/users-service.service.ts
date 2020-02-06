import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  activeUsers: string[] = ["Max", "Anna"];
  inactiveUsers: string[] = ["Chris", "Manu"];

  constructor() {}

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
