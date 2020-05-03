import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "articulos/:filter",
    data: { title: "Articulos por Categoria" },
    loadChildren: () =>
      import("./views/filter/filter.module").then((m) => m.FilterModule),
  },
  {
    path: "detalle/:product",
    loadChildren: () =>
      import("./views/detail/detail.module").then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
