import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users-service.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.setInactive(id);
  }
}
