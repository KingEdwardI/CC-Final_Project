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
var api_service_1 = require("../api.service");
var MyListService = (function () {
    function MyListService(apiService) {
        this.apiService = apiService;
        this.lists = [];
        this.getAllLists().subscribe();
    }
    MyListService.prototype.getAllLists = function () {
        return this.apiService.get("/all")
            .do(function (res) {
            this.lists = res;
        }.bind(this));
    };
    MyListService.prototype.createList = function () {
        return this.apiService.post("/create", JSON.stringify({
            list: {
                title: '',
                items: []
            }
        })).do(function (res) {
            this.lists = res;
        }.bind(this));
    };
    MyListService.prototype.updateList = function (i, newValue) {
        return this.apiService.post("/update", JSON.stringify({
            id: i,
            item: newValue
        })).do(function (res) {
            this.overwrite(this.lists[i], res);
        }.bind(this));
    };
    MyListService.prototype.overwrite = function (orig, newValues) {
        for (var i in newValues) {
            if (newValues.hasOwnProperty(i)) {
                orig[i] = newValues[i];
            }
        }
    };
    MyListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], MyListService);
    return MyListService;
}());
exports.MyListService = MyListService;
//# sourceMappingURL=myList.service.js.map