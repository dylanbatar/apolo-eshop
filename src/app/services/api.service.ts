import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProductFilter(filter: string): Observable<any> {
    switch (filter) {
      case "categorias":
        console.log("FILTRO POR CATEGORIAS");
        return this.http
          .get(
            `${environment.hostEbost}/listarCategorias/${environment.apikey}`
          )
          .pipe(
            map((data) => {
              console.log(data);
              return data["data"];
            })
          );
      case "marcas":
        console.log("FILTRO POR MARCAS");
        return this.http
          .get(
            `${environment.hostEbost}/listarCategorias/${environment.apikey}`
          )
          .pipe(
            map((data) => {
              console.log(data);
              return data["data"];
            })
          );
      case "promociones":
        console.log("FILTRO POR PROMOCIONES");
        return this.http
          .get(
            `${environment.hostEbost}/listarPlanesVitrinaCopia/${environment.apikey}`
          )
          .pipe(
            map((data) => {
              console.log(data);
              return data["data"];
            })
          );
    }
  }

  getProductoByCategory(idCategory: string): Observable<any> {
    return this.http
      .get(
        `${environment.hostEbost}/listarPlanesPorCategoriaCopia/${idCategory}/${environment.apikey}`
      )
      .pipe(map((data) => data["data"]));
  }

  getProductoInfo(idProducto: string) {
    return this.http
      .get(
        `${environment.hostEbost}/listarInfoPlanCopia/${idProducto}/${environment.apikey}`
      )
      .pipe(
        map((data) => {
          console.log(data);
          return data["data"];
        })
      );
  }
}
