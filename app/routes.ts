import { RouterConfig } from "@angular/router";
import { SplashPage } from "./splash.component";
import { FindComponent } from "./find/find.component";
import { MainContainer } from "./main-container.component";
import { LoginComponent } from "./login/login.component";
import { MyListComponent } from "./myList/myList.component";
import { SettingsComponent } from "./settings/settings.component";
import { SavedListComponent } from "./savedList/savedList.component";
import { LoginService } from "./login/login.service";

export const routes: RouterConfig = [
  {
  path: '',
  component: SplashPage
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mylist',
    component: MyListComponent,
    canActivate: [LoginService]
  },
  {
    path: 'find',
    component: FindComponent,
    canActivate: [LoginService]
  },
  {
    path: 'saved',
    component: SavedListComponent,
    canActivate: [LoginService]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginService]
  }
];
