import { DataStorageService } from "../../shared/data-storage.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
}
