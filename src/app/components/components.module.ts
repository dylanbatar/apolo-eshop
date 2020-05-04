import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner/banner.component";
import { HorizontalScrollComponent } from "./horizontal-scroll/horizontal-scroll.component";
import { CardComponent } from "./card/card.component";
import { FeatureProductsComponent } from "./feature-products/feature-products.component";
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { RecommendedComponent } from './recommended/recommended.component';

@NgModule({
  declarations: [
    BannerComponent,
    HorizontalScrollComponent,
    CardComponent,
    FeatureProductsComponent,
    TabsComponent,
    RecommendedComponent,
  ],
  imports: [CommonModule,RouterModule],
  exports: [
    BannerComponent,
    HorizontalScrollComponent,
    CardComponent,
    FeatureProductsComponent,
    TabsComponent,
    RecommendedComponent
  ],
})
export class ComponentsModule {}
