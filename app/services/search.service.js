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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.url = 'https://api.flickr.com/services/rest';
        this.cachedResults = [];
    }
    SearchService.prototype.search = function (searchText) {
        var _this = this;
        console.log(searchText);
        var params = new http_1.URLSearchParams();
        params.set('method', 'flickr.photos.search');
        params.set('format', 'json');
        params.set('api_key', 'fc185bf95cabe7001fda92298ff51d8f');
        params.set('action', 'opensearch');
        params.set('tags', searchText);
        params.set('per_page', '20');
        params.set('page', '1');
        params.set('media', 'photos');
        params.set('content_type', '7');
        params.set('format', 'json');
        params.set('nojsoncallback', '1');
        params.set('extras', 'realname , date_taken, tags');
        params.set('sort', 'date-posted-desc');
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get('https://api.flickr.com/services/rest', requestOptions).map(function (response) {
            _this.cachedResults = [];
            var jsonRes = response.json().photos.photo;
            for (var i = 0; i < jsonRes.length; i++) {
                var owner = jsonRes[i].owner;
                var farm = jsonRes[i].farm;
                var id = jsonRes[i].id;
                var secret = jsonRes[i].secret;
                var server = jsonRes[i].server;
                var title = jsonRes[i].title;
                var realname = jsonRes[i].realname;
                var datetaken = jsonRes[i].datetaken;
                var page = jsonRes[i].page;
                var tags = jsonRes[i].tags;
                var redirect = 'https://www.flickr.com/photos/' + owner + '/' + id;
                var photoUrl = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
                _this.cachedResults.push({ url: photoUrl, title: title, realname: realname, datetaken: datetaken, text: searchText,
                    redirect: redirect, tags: tags });
            }
            return response.json().photos.photo;
        });
    };
    SearchService.prototype.getCachedResults = function () {
        return this.cachedResults;
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map