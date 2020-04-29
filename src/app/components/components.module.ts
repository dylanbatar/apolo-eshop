import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner/banner.component";
import { HorizontalScrollComponent } from "./horizontal-scroll/horizontal-scroll.component";
import { CardComponent } from "./card/card.component";
import { FeatureProductsComponent } from "./feature-products/feature-products.component";
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    BannerComponent,
    HorizontalScrollComponent,
    CardComponent,
    FeatureProductsComponent,
    TabsComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    HorizontalScrollComponent,
    CardComponent,
    FeatureProductsComponent,
    TabsComponent
  ],
})
export class ComponentsModule {}
