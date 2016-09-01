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
var ListViewService = (function () {
    function ListViewService(apiService) {
        this.apiService = apiService;
        this.userList = [];
        this.getUserList().subscribe();
    }
    ListViewService.prototype.createList = function (list_title) {
        return this.apiService.post("/create", JSON.stringify({
            list: {
                title: list_title,
                items: []
            }
        })).do(function (res) {
            this.userList.push(res);
        }.bind(this));
    };
    ListViewService.prototype.addToList = function (id, new_list_item) {
        return this.apiService.post("/update", JSON.stringify({
            id: id,
            item: new_list_item
        })).do(function (res) {
            this.pushToList(id, this.userList, res.items[res.items.length - 1]);
        }.bind(this));
    };
    ListViewService.prototype.getUserList = function () {
        return this.apiService.get("/all_my_lists")
            .do(function (res) {
            this.userList = res;
        }.bind(this));
    };
    ListViewService.prototype.pushToList = function (id, orig, new_song) {
        for (var i in orig) {
            if (orig[i]._id === id) {
                orig[i].items.push(new_song);
            }
        }
    };
    ListViewService.prototype.deleteList = function (index) {
        return this.apiService.post("/delete", JSON.stringify({
            id: i
        })).do(function (res) {
            this.userList = res;
        }.bind(this));
    };
    ListViewService.prototype.deleteItem = function (list, index) {
        return this.apiService.post("/delete_list", JSON.stringify({
            id: i
        })).do(function (res) {
            this.userList.items = res;
        }.bind(this));
    };
    ListViewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], ListViewService);
    return ListViewService;
}());
exports.ListViewService = ListViewService;
//# sourceMappingURL=list-view.service.js.map