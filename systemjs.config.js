/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
 const ngxInfiniteScroll = '0.8.4';

(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'Flickr-App/node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'Flickr-App/app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

      // other libraries
      // 'ngx-infinite-scroll':       'npm:ngx-infinite-scroll/bundles',
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'css': 'node_modules/systemjs-plugin-css',
      'less': 'node_modules/systemjs-plugin-less',
      'lesscss': 'node_modules/less',
      'ngx-infinite-scroll': 'https://unpkg.com/ngx-infinite-scroll@' + ngxInfiniteScroll
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      // 'ngx-infinite-scroll': {
      //   main: 'ngx-infinite-scroll.umd.js',
      //   defaultExtension: 'js'
      // },
      'ngx-infinite-scroll': {
        main: 'bundles/ngx-infinite-scroll.umd.js',
        defaultExtension: 'js'
      },
      lesscss: {
        main: {
          browser: './dist/less.min.js',
          node: '@node/less'
        }
      },
      css: { main: 'css.js' },
      less: { main: 'less.js' }
    }
  });
})(this);
