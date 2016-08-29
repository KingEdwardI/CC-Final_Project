"use strict";
var splash_component_1 = require("./splash.component");
var find_component_1 = require("./find/find.component");
var login_component_1 = require("./login/login.component");
var myList_component_1 = require("./myList/myList.component");
var savedList_component_1 = require("./savedList/savedList.component");
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
        component: myList_component_1.MyListComponent
    },
    {
        path: 'find',
        component: find_component_1.FindComponent
    },
    {
        path: 'saved',
        component: savedList_component_1.SavedListComponent
    }
];
//# sourceMappingURL=routes.js.map