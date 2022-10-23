import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SisForm155Component } from "../bns/sis-form155/sis-form155.component";
import { SisForm321Component } from "./sis-form321/sis-form321.component";
import { SisForm399Component } from "./sis-form399/sis-form399.component";
import { SisForm157Component } from "./sis-form157/sis-form157.component";
import { SisForm211Component } from "./sis-form211/sis-form211.component";
import { SisForm242Component } from "./sis-form242/sis-form242.component";
import { SisForm154Component } from "./sis-form154/sis-form154.component";
import { SisForm243Component } from "./sis-form243/sis-form243.component";

const routes: Routes = [
  {
    path: "sisForm211",
    component: SisForm211Component,
  },

  {
    path: "sisForm242",
    component: SisForm242Component,
  },
  {
    path: "sisForm157",
    component: SisForm157Component,
  },

  {
    path: "sisForm155",
    component: SisForm155Component,
  },
  {
    path: "sisForm321",
    component: SisForm321Component,
  },
  {
    path: "sisForm399",
    component: SisForm399Component,
  },
  {
    path: "sisForm154",
    component: SisForm154Component,
  },
  {
    path: "sisForm243",
    component: SisForm243Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BnsRouterModule {}
