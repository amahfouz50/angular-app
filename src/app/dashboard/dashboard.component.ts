import { MenuService } from "./../core/http/menu.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private menu: MenuService) {}
  menuData: any = [];
  ngOnInit(): void {
    console.log("++++++++");
    this.doget();
  }
  doget() {
    console.log(this.menu.getApi());
    this.menu.getMenuData().subscribe((res) => {
      console.log(res);
      this.menuData = res;
      console.log(this.menuData);
    });
  }
}

export interface IMenuData {
  routeLink: string;
  appIcon?: string;
  appNameS: string;
  expanded?: boolean;
  userMnu?: [];
}
