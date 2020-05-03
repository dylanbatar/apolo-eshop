import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  public hostImg: string;
  @Input() item: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.hostImg = environment.hostImg;
  }

  public addToCar(item: any) {
    console.log(item);
  }
}
