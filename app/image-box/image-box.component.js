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
var ImageBoxComponent = (function () {
    function ImageBoxComponent() {
        this.tag = [];
    }
    ImageBoxComponent.prototype.ngOnInit = function () {
        var no_tags = this.tags.split(" ");
        for (var i = 0; i < no_tags.length; i++) {
            this.tag[i] = no_tags[i];
        }
        this.tagBaseUrl = 'https://www.flickr.com/photos/tags/';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ImageBoxComponent.prototype, "disableFavs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "realname", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "datetaken", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "redirect", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageBoxComponent.prototype, "tags", void 0);
    ImageBoxComponent = __decorate([
        core_1.Component({
            selector: 'image-box',
            templateUrl: 'Flickr-App/app/image-box/image-box.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ImageBoxComponent);
    return ImageBoxComponent;
}());
exports.ImageBoxComponent = ImageBoxComponent;
//# sourceMappingURL=image-box.component.js.map