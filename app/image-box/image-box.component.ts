import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-box',
  templateUrl: 'Flickr-App/app/image-box/image-box.component.html'
})
export class ImageBoxComponent {

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
