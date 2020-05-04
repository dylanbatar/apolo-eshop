import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recommended",
  templateUrl: "./recommended.component.html",
  styleUrls: ["./recommended.component.scss"],
})
export class RecommendedComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
