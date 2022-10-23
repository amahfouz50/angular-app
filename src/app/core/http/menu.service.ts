import { environment as env } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getApi() {
    return env.apiMenuApp;
  }

  getMenuApps() {
    return this.http.get(env.apiMenuApp + "/mnuapps");
  }
  getMenuData() {
    return this.http.get(env.apiMenuApp + "/mnudata");
  }
}
