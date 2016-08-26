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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var routes_1 = require("./routes");
var main_container_component_1 = require("./main-container.component");
var find_component_1 = require("./find/find.component");
var find_service_1 = require("./find/find.service");
var login_component_1 = require("./login/login.component");
var login_service_1 = require("./login/login.service");
var myList_component_1 = require("./myList/myList.component");
var savedList_component_1 = require("./savedList/savedList.component");
var savedList_service_1 = require("./savedList/savedList.service");
var settings_component_1 = require("./settings/settings.component");
var settings_service_1 = require("./settings/settings.service");
var soundcloud_component_1 = require("./soundcloud/soundcloud.component");
var soundcloud_service_1 = require("./soundcloud/soundcloud.service");
var splash_component_1 = require("./splash.component");
var api_service_1 = require("./api.service");
var list_view_service_1 = require("./myList/list-view.service");
var listView_component_1 = require("./myList/listView.component");
var listItem_component_1 = require("./myList/listItem.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                main_container_component_1.MainContainer,
                find_component_1.FindComponent,
                login_component_1.LoginComponent,
                myList_component_1.MyListComponent,
                savedList_component_1.SavedListComponent,
                settings_component_1.SettingsComponent,
                soundcloud_component_1.SoundcloudComponent,
                listView_component_1.ListViewComponent,
                listItem_component_1.ListItemComponent,
                splash_component_1.SplashPage
            ],
            bootstrap: [main_container_component_1.MainContainer],
            providers: [
                find_service_1.FindService,
                login_service_1.LoginService,
                savedList_service_1.SavedListService,
                settings_service_1.SettingsService,
                soundcloud_service_1.SoundcloudService
            ].concat(http_1.HTTP_PROVIDERS, [
                router_1.provideRouter(routes_1.routes),
                list_view_service_1.ListViewService,
                api_service_1.ApiService
            ])
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map