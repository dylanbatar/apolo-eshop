import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  categories: any = [];
  constructor(private _ebost: ApiService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this._ebost.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}
