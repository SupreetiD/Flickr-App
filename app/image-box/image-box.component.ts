import { Component, OnInit, Input } from '@angular/core';
// import { BootstrapModalService } from '../bootstrap-modal/bootstrap-modal.service';
// import { ImageModalComponent } from '../image-modal-view/image-modal-view.component';
// import * as config from '../../systemjs.config';

@Component({
  selector: 'image-box',
  templateUrl: 'Flickr-App/app/image-box/image-box.component.html'
})
export class ImageBoxComponent {

  // array :any = [];
  // sum = 100;
  // throttle = 300;
  // scrollDistance = 1;
  // scrollUpDistance = 2;
  // direction = '';
  // title :any = 'This is Angular InfiniteScroll v' + config.map['ngx-infinite-scroll'].split('@')[1];

  @Input()
  private src: string;

  @Input()
  private title: string;

  @Input()
  private disableFavs: boolean;

  @Input()
  private realname: string;

  @Input()
  private datetaken: string;

  @Input()
  private text: string;

  @Input()
  private url: string;

  @Input()
  private redirect: string;

  @Input()
  private page: string;

  @Input()
  private tags: string;

  tag: any= [];
  tagBaseUrl: string;

  constructor(
  ) {
    }

  public ngOnInit(): void {
  let no_tags: any  = this.tags.split(" ");
  for(var i = 0; i < no_tags.length; i++) {
    this.tag[i] = no_tags[i];
  }
   this.tagBaseUrl = 'https://www.flickr.com/photos/tags/';

}

}
