import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SisForm195Component } from "./sis-form195/sis-form195.component";
import { SisForm196Component } from "./sis-form196/sis-form196.component";
import { SisForm197Component } from "./sis-form197/sis-form197.component";

const routes: Routes = [
  {
    path: "sisForm195",
    component: SisForm195Component,
  },

  {
    path: "sisForm196",
    component: SisForm196Component,
  },
  {
    path: "sisForm197",
    component: SisForm197Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrdRouterModule {}
