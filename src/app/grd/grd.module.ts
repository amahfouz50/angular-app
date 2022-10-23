import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SisForm195Component } from "./sis-form195/sis-form195.component";
import { SisForm196Component } from "./sis-form196/sis-form196.component";
import { SisForm197Component } from "./sis-form197/sis-form197.component";
import { GrdRouterModule } from "./grd.router.module";

@NgModule({
  declarations: [SisForm195Component, SisForm196Component, SisForm197Component],
  imports: [CommonModule, GrdRouterModule],
})
export class GrdModule {}
