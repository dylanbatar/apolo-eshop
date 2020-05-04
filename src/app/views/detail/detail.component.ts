import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  product: any;
  hostImg: string;
  loading: boolean = false;
  constructor(
    private activedRouter: ActivatedRoute,
    private _ebost: ApiService
  ) {}

  ngOnInit(): void {
    this.hostImg = environment.hostImg;
    this.getProductoId();
  }

  getProductoId() {
    this.activedRouter.params.subscribe((params) => {
      this._ebost.getProductoInfo(params.product).subscribe((response) => {
        this.product = response[0];
        console.log(this.product)
        this.loading = true;
      });
    });
  }
}
