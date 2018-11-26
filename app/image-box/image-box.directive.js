// import {
//   Directive,
//   ElementRef,
//   HostListener,
//   Input,
//   Output,
//   Renderer,
//   EventEmitter
// } from '@angular/core';
// @Directive({
//   selector: '[favoriteImage]'
// })
// export class ImageBoxDirective {
//
//   constructor(
//     private el: ElementRef,
//     private renderer: Renderer
//   ) { }
//
//   private favored: boolean = false;
//
//
//   @Input('imageTitle') title: string;
//   @Input('imageUrl') url: string;
//
//   @Output() public onFavored: EventEmitter<boolean> = new EventEmitter<boolean>();
//
//   @HostListener('click') onMouseEnter() {
//     if (this.favored) {
//       return;
//     }
//     this.favored = true;
//
//     if (!localStorage.getItem('flickrPhotosAppNg2')) {
//       localStorage.setItem('flickrPhotosAppNg2', JSON.stringify([{
//         title: this.title,
//         url: this.url
//       }]));
//     } else {
//       let currentFavs = JSON.parse(localStorage.getItem("flickrPhotosAppNg2"));
//       currentFavs.push({
//         title: this.title,
//         url: this.url
//       });
//       localStorage.setItem('flickrPhotosAppNg2', JSON.stringify(currentFavs));
//     }
//
//     console.log('on favored...');
//     this.onFavored.emit(true);
//     //Here should have saved to database so it would have persisted on refresh
//     //this.el.nativeElement
//     //this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
//     //element[0].querySelector('.favorite-hover-label').style.color = 'red';
//     //element[0].querySelector('.favorite-hover-label .fa-heart-o').style.display = 'none';
//     //element[0].querySelector('.favorite-hover-label .fa-heart').style.display = 'inline';
//     //element[0].querySelector('.favorite-overlay').style.top = '0px';
//   }
//
// }
//# sourceMappingURL=image-box.directive.js.map