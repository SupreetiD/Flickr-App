import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';
import { UIService } from '../services/app-ui.service';

@Component({
  selector: 'search',
  templateUrl: 'Flickr-App/app/search/search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor(
    searchService: SearchService,
    uiService: UIService,
  ) {
    this.searchService = searchService;
    this.uiService = uiService;
  }

  searchService: SearchService;
  uiService: UIService;
  searchString: string = '';
  searchInProgress: boolean = false;
  private resizedObservable: Observable<boolean>;
  data: any;

  public ngOnInit() {
    this.uiService.resetHeaderFooter();
    this.uiService.adjustImageContainerHeights(false, 0);
    this.resizedObservable = this.uiService.getResizedObservable();
    this.resizedObservable.subscribe(
      (change) => {
        this.uiService.resetHeaderFooter();
        this.uiService.adjustImageContainerHeights(false, 0);
      }
    );
  }

  public ngOnDestroy(): void {
    this.uiService.resetHeaderFooter();
  }

  search() {

    if (this.searchString.length == 0) {
      alert('Please first enter a search query.');
      return;
    }

    this.searchInProgress = true;
    let searchObservable: Observable<any> = this.searchService.search(this.searchString);
    searchObservable.subscribe(
      data => {
        this.data = data
        if (data.length == 0) {
      			alert('No match found!');
        }
      },
      err => {
        console.log(err);
      },
      () => {
        this.searchInProgress = false;
      }
    );
  }

}
