import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";
import { LoginService } from "./login/login.service";

@Component({
  selector: "splash",
  directives: [ ...ROUTER_DIRECTIVES ],
  templateUrl: '/html/splash.html',
  styleUrls: ["app/css/splash.css"]
})

export class SplashPage { 
  constructor(private router: Router,
              private loginService: LoginService) {}
}
