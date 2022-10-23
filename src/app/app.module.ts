import { CoreModule } from "./core/core.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SublevelMenuComponent } from "./sidenav/sublevel-menu.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { BnsModule } from "./bns/bns.module";
import { GrdModule } from "./grd/grd.module";
import { BodyComponent } from "./body/body.component";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    BnsModule,
    GrdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
