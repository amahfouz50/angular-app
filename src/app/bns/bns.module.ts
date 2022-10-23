import { SisForm243Component } from "./sis-form243/sis-form243.component";
import { SisForm154Component } from "./sis-form154/sis-form154.component";
import { SisForm242Component } from "./sis-form242/sis-form242.component";
import { SisForm211Component } from "./sis-form211/sis-form211.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SisForm155Component } from "./sis-form155/sis-form155.component";
import { SisForm157Component } from "./sis-form157/sis-form157.component";
import { SisForm321Component } from "./sis-form321/sis-form321.component";
import { SisForm399Component } from "./sis-form399/sis-form399.component";
import { BnsRouterModule } from "./bns.router.module";

@NgModule({
  declarations: [
    SisForm155Component,
    SisForm157Component,
    SisForm321Component,
    SisForm399Component,
    SisForm211Component,
    SisForm242Component,
    SisForm154Component,
    SisForm243Component,
  ],
  imports: [CommonModule, BnsRouterModule],
})
export class BnsModule {}
