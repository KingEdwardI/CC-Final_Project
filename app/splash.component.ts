import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

@Component({
  selector: "splash",
  directives: [ ...ROUTER_DIRECTIVES ],
  styleUrls: ["/css/splash.css"],
  templateUrl: '/html/splash.html'
})

export class SplashPage { 
}
