import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  activeUsers: string[] = ["Max", "Anna"];
  inactiveUsers: string[] = ["Chris", "Manu"];

  constructor() {}
}
