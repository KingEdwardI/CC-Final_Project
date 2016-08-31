import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ApiService } from "../api.service";

@Injectable ()
export class LoginService {
  
  authenticated: boolean = false;
  user: Object;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}
  
  authenticate(path: string, creds: Object) {
    return this.apiService.post(`/${path}`, JSON. stringify(creds))
    .do(function(response) {
      if (response.status === "success") {
        this.authenticated = true;
        this.user = response.userInfo;
      }
    this.router.navigate(['/mylist']);
    }.bind(this));
  }

  deauthenticate() {
    this.authenticated = false;
    this.user = null;
    this.router.navigate(['login']);
    this.apiService.post('/logout', "")
    .subscribe(function(res){
      console.log(res);
    });
  }

  editUser(user) {
    return this.apiService.post("/edit-user", JSON.stringify(user))
    .do(function(response) {
      this.user = response;
    }.bind(this));
  }

  canActivate(): boolean {
    if (!this.authenticated) {
      this.router.navigate(['login']);
    }
    return this.authenticated;
  }

}
