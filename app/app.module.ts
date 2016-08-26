import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_PROVIDERS } from "@angular/http";
import { provideRouter, } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { routes } from "./routes";
import { MainContainer } from "./main-container.component";
import { FindComponent } from "./find/find.component";
import { FindService } from "./find/find.service";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { MyListComponent } from "./myList/myList.component";
import { SavedListComponent } from "./savedList/savedList.component";
import { SavedListService } from "./savedList/savedList.service";
import { SettingsComponent } from "./settings/settings.component";
import { SettingsService } from "./settings/settings.service";
import { SoundcloudComponent } from "./soundcloud/soundcloud.component";
import { SoundcloudService } from "./soundcloud/soundcloud.service";
import { SplashPage } from "./splash.component";
import { ApiService } from "./api.service";
import { ListViewService } from "./myList/list-view.service";
import { ListViewComponent } from "./myList/listView.component";
import { ListItemComponent } from "./myList/listItem.component";




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
      MainContainer, 
      FindComponent,
      LoginComponent,
      MyListComponent,
      SavedListComponent,
      SettingsComponent,
      SoundcloudComponent,
      ListViewComponent,
      ListItemComponent,
      SplashPage
      ],
  bootstrap:    [ MainContainer ],
  providers:    [ 
      FindService,
      LoginService,
      SavedListService,
      SettingsService,
      SoundcloudService,
      ...HTTP_PROVIDERS,
      provideRouter(routes),
      ListViewService,
      ApiService
 ]
})
export class AppModule { }
