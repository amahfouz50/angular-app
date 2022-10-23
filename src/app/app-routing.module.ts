import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "bns",
    loadChildren: () => import("./bns/bns.module").then((m) => m.BnsModule),
  },
  {
    path: "grd",
    loadChildren: () => import("./grd/grd.module").then((m) => m.GrdModule),
  },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
