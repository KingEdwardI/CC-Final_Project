"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var api_service_1 = require("../api.service");
var LoginComponent = (function () {
    function LoginComponent(apiService, loginService, router) {
        this.apiService = apiService;
        this.loginService = loginService;
        this.router = router;
        this.mode = "login";
        this.buttonText = "Login";
        this.switchText = "Need to create an account?";
        this.errorMsg = "";
        this.loginInfo = {
            username: "",
            password: ""
        };
        this.loggedIn = false;
    }
    LoginComponent.prototype.switchMode = function (evt) {
        evt.preventDefault();
        if (this.mode === "login") {
            this.mode = "signup";
            this.buttonText = "Sign Up";
            this.switchText = "Already have an account?";
        }
        else {
            this.mode = "login";
            this.buttonText = "Login";
            this.switchText = "Need to create an accound?";
        }
    };
    LoginComponent.prototype.authenticate = function () {
        console.log(this.loginInfo);
        if (!this.loginInfo.username || !this.loginInfo.password) {
            this.errorMsg = "Invalid username or password";
            return;
        }
        this.loginService
            .authenticate(this.mode, this.loginInfo)
            .subscribe(function (res) {
            console.log(res);
        }.bind(this));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "/html/login.html"
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map