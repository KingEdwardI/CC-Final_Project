import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ApiService } from "../api.service";
import { ListViewService } from "../myList/list-view.service";
import { SavedListService } from "../savedList/savedList.service";

@Injectable ()
export class LoginService {
  
  authenticated: boolean = false;
  user: Object;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private listViewService: ListViewService,
    private savedListService: SavedListService
  ) {}
  
  authenticate(path: string, creds: Object) {
    return this.apiService.post(`/${path}`, JSON. stringify(creds))
    .do(function(response) {
      if (response.status === "success") {
        this.authenticated = true;
        this.user = response.userInfo;
        this.listViewService.loadUserLists();
        this.savedListService.loadSavedLists();
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
      this.listViewService.lists = [];
      this.savedListService.savedLists = [];
      console.log(res);
    }.bind(this));
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
