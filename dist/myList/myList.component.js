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
var common_1 = require("@angular/common");
var listView_component_1 = require("./listView.component");
var list_view_service_1 = require("./list-view.service");
var MyListComponent = (function () {
    function MyListComponent(listViewService) {
        this.listViewService = listViewService;
        this.list_title = '';
        this.onUpdate = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
    }
    MyListComponent.prototype.onDeleteClick = function () {
        this.onDelete.emit();
    };
    MyListComponent.prototype.createList = function () {
        this.listViewService
            .createList(this.list_title)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyListComponent.prototype, "newList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MyListComponent.prototype, "onUpdate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MyListComponent.prototype, "onDelete", void 0);
    MyListComponent = __decorate([
        core_1.Component({
            selector: "mylist",
            directives: common_1.FORM_DIRECTIVES.concat([listView_component_1.ListViewComponent]),
            templateUrl: "../../html/mylist.html",
            styleUrls: ["app/css/mylist.css"]
        }), 
        __metadata('design:paramtypes', [list_view_service_1.ListViewService])
    ], MyListComponent);
    return MyListComponent;
}());
exports.MyListComponent = MyListComponent;
//# sourceMappingURL=myList.component.js.map