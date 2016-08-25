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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.postHeaders = new http_1.Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        this.getHeaders = new http_1.Headers({
            "Accept": "application/json"
        });
        this.url = "http://localhost:3500";
    }
    ApiService.prototype.getJSON = function (response) {
        return response.json();
    };
    ApiService.prototype.checkForError = function (response) {
        if (response.status <= 200 && response.status < 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            throw error;
        }
    };
    ApiService.prototype.get = function (path) {
        return this.http.get(this.url + path, { headers: this.getHeaders })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJSON);
    };
    ApiService.prototype.post = function (path, body) {
        return this.http.post(this.url + path, body, { headers: this.postHeaders })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJSON);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map