import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  constructor(
    private activedRouter: ActivatedRoute,
    private _ebost: ApiService
  ) {}

  ngOnInit(): void {
    this.getProductoId();
  }

  getProductoId() {
    this.activedRouter.params.subscribe((params) => {
      console.log(params);
      this._ebost.getProductoInfo(params.product).subscribe();
    });
  }
}
