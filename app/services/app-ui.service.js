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
var Subject_1 = require('rxjs/Subject');
var UIService = (function () {
    function UIService(injector, window) {
        var _this = this;
        this.injector = injector;
        this.window = window;
        this.resizedSource = new Subject_1.Subject();
        this.resizedObservable$ = this.resizedSource.asObservable();
        this.body = document.getElementsByTagName('body')[0];
        this.keepFooterStatic = false;
        var self = this;
        window.onresize = function () {
            console.log('resize adjust');
            self.resetHeaderFooter();
            console.log('resize adjust end');
        };
        window.addEventListener('orientationchange', function () {
            console.log('orientation change adjust');
            self.resetHeaderFooter();
        });
        window.onscroll = function () {
            console.log('on scroll adjust');
            self.adjustHeaderFooter();
            console.log('on scroll adjust end');
            // if(window.scrollTopKey() + window.innerHeight() == document.body.scrollHeight) {
        };
        window.onresize = function () {
            _this.broadcastResize();
        };
        window.onorientationchange = function () {
            _this.broadcastResize();
        };
    }
    UIService.prototype.broadcastResize = function () {
        this.resizedSource.next(true);
    };
    UIService.prototype.getResizedObservable = function () {
        return this.resizedObservable$;
    };
    UIService.prototype.findColNum = function () {
        var window = this.window;
        //injector.get(DOCUMENT);
        var relevantWidth = window.innerWidth;
        if (document.body.clientWidth > window.innerWidth) {
            relevantWidth = document.body.clientWidth;
        }
        if (relevantWidth < 768) {
            return [1];
        }
        else if (relevantWidth < 992) {
            return [1, 2];
        }
        else {
            return [1, 2, 3];
        }
    };
    UIService.prototype.adjustImageContainerHeights = function (imagesPage, images) {
        var self = this;
        var imageLoadTracker = setInterval(function () {
            console.log('in adjust container heights');
            if (images.page) {
                var imagesPage = true;
                images.page = images.page + 1;
                console.log('page: ' + images.page);
            }
            var imgTags = document.getElementsByTagName('img');
            var loaded = 0;
            for (var i = 0; i < imgTags.length; i++) {
                if (imgTags[i].complete) {
                    loaded++;
                }
            }
            if (loaded == imgTags.length) {
                console.log('loaded: ' + loaded + ', image tags: ' + imgTags.length + ', out of: ' + images.length);
                if (images.length || images.length == loaded || !imagesPage) {
                    clearInterval(imageLoadTracker);
                }
                else {
                    return;
                }
                var containerTags = document.getElementsByClassName('container');
                var largestContainer = 0;
                for (var j = 0; j < containerTags.length; j++) {
                    containerTags[j].style.height = 'auto';
                    if (largestContainer < containerTags[j].offsetHeight) {
                        largestContainer = containerTags[j].offsetHeight;
                    }
                    console.log("length: ", containerTags.length);
                    if (j == containerTags.length) {
                        alert("end of page");
                    }
                }
                if (largestContainer < window.innerHeight - 185) {
                    largestContainer = window.innerHeight - 185;
                }
                for (var k = 0; k <= containerTags.length; k++) {
                    //console.log('comparing: ' + largestContainer + ' : ' + containerTags[k].offsetHeight);
                    containerTags[k].style.height = largestContainer + 'px';
                }
                console.log('finished adjusting image sizes');
                self.resetHeaderFooter();
            }
        }, 10);
    };
    UIService.prototype.adjustHeaderFooter = function () {
        var y = this.body.scrollTop || document.documentElement.scrollTop;
        if (this.keepFooterStatic && ((this.body.scrollHeight - y) > (window.innerHeight + 90))) {
            this.keepFooterStatic = false;
        }
        if ((this.body.scrollHeight - y) > (window.innerHeight + 30) && !this.keepFooterStatic) {
            document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');
        }
        else if (this.body.scrollHeight > window.innerHeight) {
            this.keepFooterStatic = true;
            document.getElementsByTagName('footer')[0].setAttribute('class', 'footer-static');
        }
        if (this.body.scrollHeight == window.innerHeight) {
            this.keepFooterStatic = false;
            document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');
        }
    };
    ;
    UIService.prototype.resetHeaderFooter = function () {
        console.log('reseting header footer');
        this.keepFooterStatic = false;
        document.getElementsByTagName('footer')[0].setAttribute('class', 'footer');
        this.adjustHeaderFooter();
    };
    UIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.Injector, Window])
    ], UIService);
    return UIService;
}());
exports.UIService = UIService;
//# sourceMappingURL=app-ui.service.js.map