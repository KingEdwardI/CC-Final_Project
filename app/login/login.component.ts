import { Component, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { MyListComponent } from "../myList/myList.component";
import { ApiService } from "../api.service";

@Component ({
  selector: "login",
  templateUrl: "/html/login.html"
})
export class LoginComponent { 
  mode: string = "login";
  buttonText: string = "Login";
  switchText: string = "Need to create an account?";
  errorMsg: string = "";

  loginInfo = {
    username: "",
    password: ""
  };

  constructor(
    private apiService: ApiService,
    private loginService: LoginService,
    private router: Router
  ) {}

  loggedIn: boolean = false;

  switchMode(evt) {
    evt.preventDefault();
    if (this.mode === "login") {
      this.mode = "signup";
      this.buttonText = "Sign Up";
      this.switchText = "Already have an account?";
    } else {
      this.mode = "login";
      this.buttonText = "Login";
      this.switchText = "Need to create an accound?";
    }
  }


  authenticate () {
    console.log(this.loginInfo);
    if (!this.loginInfo.username || !this.loginInfo.password) {
      this.errorMsg = "Invalid username or password";
      return;
    }
    this.loginService
    .authenticate(this.mode, this.loginInfo)
    .subscribe(function(res) {
      console.log(res);
    });
  }

} 
