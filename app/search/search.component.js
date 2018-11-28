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
var core_1 = require('@angular/core');
require('rxjs/Rx');
var search_service_1 = require('../services/search.service');
var app_ui_service_1 = require('../services/app-ui.service');
var SearchComponent = (function () {
    function SearchComponent(searchService, uiService) {
        this.searchString = '';
        this.searchInProgress = false;
        this.pos = 0;
        this.searchService = searchService;
        this.uiService = uiService;
    }
    SearchComponent.prototype.onWindowScroll = function () {
        var body = document.getElementsByTagName('body')[0];
        this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        var max = document.documentElement.scrollHeight;
        var y = body.scrollTop || document.documentElement.scrollTop;
        console.log("Values ", this.pos, max);
        if (this.pos > document.body.scrollHeight) {
            this.search();
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiService.resetHeaderFooter();
        this.uiService.adjustImageContainerHeights(false, 0);
        this.resizedObservable = this.uiService.getResizedObservable();
        this.resizedObservable.subscribe(function (change) {
            _this.uiService.resetHeaderFooter();
            _this.uiService.adjustImageContainerHeights(false, 0);
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.uiService.resetHeaderFooter();
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        if (this.searchString.length == 0) {
            alert('Please first enter a search query.');
            return;
        }
        this.searchInProgress = true;
        var searchObservable = this.searchService.search(this.searchString);
        searchObservable.subscribe(function (data) {
            _this.data = data;
            if (data.length == 0) {
                alert('No match found!');
            }
        }, function (err) {
            console.log(err);
        }, function () {
            _this.searchInProgress = false;
        });
    };
    __decorate([
        core_1.HostListener("window:scroll", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SearchComponent.prototype, "onWindowScroll", null);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'Flickr-App/app/search/search.component.html',
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService, app_ui_service_1.UIService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map