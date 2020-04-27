import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner/banner.component";
import { HorizontalScrollComponent } from "./horizontal-scroll/horizontal-scroll.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [BannerComponent, HorizontalScrollComponent, CardComponent],
  imports: [CommonModule],
  exports: [BannerComponent, HorizontalScrollComponent, CardComponent],
})
export class ComponentsModule {}
