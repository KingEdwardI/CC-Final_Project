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
var list_view_service_1 = require("./list-view.service");
var ListViewComponent = (function () {
    function ListViewComponent(listViewService) {
        this.listViewService = listViewService;
        this.filteredList = [];
        this.new_list_item = '';
    }
    ListViewComponent.prototype.deleteList = function () {
        this.listViewService
            .deleteList(this.list._id).subscribe(function (res) {
        });
    };
    ListViewComponent.prototype.addToList = function () {
        this.listViewService
            .addToList(this.list._id, this.new_list_item)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ListViewComponent.prototype.filter = function () {
        if (this.new_list_item !== "") {
            this.filteredList = this.listViewService.artists.filter(function (el) {
                return el.indexOf(this.new_list_item) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    ListViewComponent.prototype.select = function (item) {
        this.new_list_item = item;
        this.filteredList = [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListViewComponent.prototype, "list", void 0);
    ListViewComponent = __decorate([
        core_1.Component({
            selector: 'list-view',
            templateUrl: "../../html/list-view.html",
            styleUrls: ["app/css/list-view.css"]
        }), 
        __metadata('design:paramtypes', [list_view_service_1.ListViewService])
    ], ListViewComponent);
    return ListViewComponent;
}());
exports.ListViewComponent = ListViewComponent;
//# sourceMappingURL=listView.component.js.map