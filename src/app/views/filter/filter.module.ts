import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { FilterRoutingModule } from "./filter-routing.module";
import { FilterComponent } from "./filter.component";
import { ComponentsModule } from "src/app/components/components.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class FilterModule {}
