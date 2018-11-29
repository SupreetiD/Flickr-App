import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
  pos: any =0;
  page:any= 1;


    @HostListener("window:scroll", ["$event"])
      onWindowScroll() {
        let body:any = document.getElementsByTagName('body')[0];
      this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
      let max = document.documentElement.scrollHeight;
      var y = body.scrollTop || document.documentElement.scrollTop;
      console.log("Values ", this.pos, max);
       if(this.pos > document.body.scrollHeight )   {
       this.search();
       // pos= pos+3000;
       console.log('pos ', this.pos);
      }
    }

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
    let searchObservable: Observable<any> = this.searchService.search(this.searchString , this.page);
    (this.page)++;
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
