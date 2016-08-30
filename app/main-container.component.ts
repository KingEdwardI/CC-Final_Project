import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";
import { LoginService } from "./login/login.service";

@Component({
  selector: "main-container",
  directives: [ ...ROUTER_DIRECTIVES ],
  styleUrls: ["app/css/main-container.css"],
  templateUrl: '/html/main-container.html'
})

export class MainContainer {
  constructor(private router: Router,
              private loginService: LoginService) {}
}
