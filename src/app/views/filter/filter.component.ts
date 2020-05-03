import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

enum filterTypes {
  marcas,
  categorias,
  promociones,
}

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  private filterTitle: string = "";
  public productArray: any[] = [];
  public selectData: any[] = [];
  public selected: string = "none";
  public selectDataMarks: any[] = [];
  public selectedMark: string = "none";

  private productoArrayOriginal: any = [];

  @ViewChild("markFilter", { static: false }) markFilter: ElementRef;

  constructor(
    private activedRouter: ActivatedRoute,
    public router: Router,
    private _ebost: ApiService
  ) {}

  ngOnInit(): void {
    this.setFilterTitle = this.activedRouter.snapshot.params.filter;
    this.getCategories();
  }

  private set setFilterTitle(_value: string) {
    this.filterTitle = _value;
  }

  public get getFilterTitle(): string {
    return this.filterTitle;
  }

  public selectCategory(): string {
    let result: any = {};

    for (const item in this.selectData) {
      if (this.selectData[item].categoria_es === this.selected) {
        console.log(this.selectData[item]);
        result = this.selectData[item];
        break;
      }
    }

    this.filterMarks(result);

    return result;
  }

  public selectMark(): void {
    this.productArray = this.productoArrayOriginal;

    this.productArray = this.productArray.filter(
      (item) => item.data[0].valor === this.selectedMark
    );
    console.log(this.productArray)
  }

  private getCategories(): void {
    this._ebost.getProductFilter(this.getFilterTitle).subscribe((response) => {
      if (this.getFilterTitle !== "marcas") {
        this.productArray = response;
        this.productoArrayOriginal = response;
      }

      response.map((item) => {
        let productoItem = {
          id_categoria: item.id_categoria,
          categoria_es: item.categoria_es,
        };
        this.selectData.push(productoItem);
      });
    });
  }

  private filterMarks(obj: any) {
    this._ebost
      .getProductoByCategory(obj["id_categoria"])
      .subscribe((response) => {
        this.selectDataMarks = response.map((item) =>
          item.data[0].valor.trim()
        );
        const unique = new Set(this.selectDataMarks);

        this.selectDataMarks = [...unique];

        console.log(this.markFilter);

        this.productArray = response;
        this.productoArrayOriginal = response;
      });
  }
}
