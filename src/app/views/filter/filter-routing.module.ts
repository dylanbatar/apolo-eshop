import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilterComponent } from "./filter.component";

const routes: Routes = [
  {
    path: "",
    component: FilterComponent,
    data: { title: "Articulos por Categoria papi" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterRoutingModule {}
