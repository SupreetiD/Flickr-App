import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { SearchService } from '../services/search.service';
import { UIService } from '../services/app-ui.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'gallery',
  templateUrl: 'Flickr-App/app/gallery/gallery.component.html'
})
export class GalleryComponent implements OnInit {

  private searchService: SearchService;
  private uiService: UIService;
  private images: any[] = [];
  private picCols: any[];
  private resizedObservable: Observable<boolean>;
  private zone: NgZone;


  constructor(
    searchService: SearchService,
    uiService: UIService,
    zone: NgZone
  ) {
    this.uiService = uiService;
    this.searchService = searchService;
    this.images = searchService.getCachedResults() ? searchService.getCachedResults() : [];
    this.zone = zone;
  }

  public ngOnInit(): void {
    this.picCols = this.uiService.findColNum();
    console.log('all images : ', this.images.length)
    console.log(this.picCols);
    this.uiService.resetHeaderFooter();
    this.uiService.adjustImageContainerHeights(true, this.images);
    this.resizedObservable = this.uiService.getResizedObservable();
    this.resizedObservable.subscribe(
      (change) => {
        this.zone.run(() => {
          this.picCols = this.uiService.findColNum();
          this.uiService.resetHeaderFooter();
          this.uiService.adjustImageContainerHeights(true, this.images);
        });
      }
    );
  }

  public ngOnDestroy(): void {
    this.uiService.resetHeaderFooter();
  }
}
