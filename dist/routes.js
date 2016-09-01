"use strict";
var splash_component_1 = require("./splash.component");
var find_component_1 = require("./find/find.component");
var login_component_1 = require("./login/login.component");
var myList_component_1 = require("./myList/myList.component");
var savedList_component_1 = require("./savedList/savedList.component");
var login_service_1 = require("./login/login.service");
exports.routes = [
    {
        path: '',
        component: splash_component_1.SplashPage
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'mylist',
        component: myList_component_1.MyListComponent,
        canActivate: [login_service_1.LoginService]
    },
    {
        path: 'find',
        component: find_component_1.FindComponent,
        canActivate: [login_service_1.LoginService]
    },
    {
        path: 'saved',
        component: savedList_component_1.SavedListComponent,
        canActivate: [login_service_1.LoginService]
    }
];
//# sourceMappingURL=routes.js.map