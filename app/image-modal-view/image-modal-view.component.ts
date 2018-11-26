import { Component } from '@angular/core';

@Component({
  selector: 'image-modal-view',
  templateUrl: 'Flickr-App/app/image-modal-view/image-modal-view.component.html'
})
export class ImageModalComponent {

  private imageTitle: string;
  private imageUrl: string;

  public setImageTitle(imageTitle: string) {
    this.imageTitle = imageTitle;
  }

  public setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }

}
