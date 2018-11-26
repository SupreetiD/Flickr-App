
import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  URLSearchParams
} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "RxJS/Rx";


@Injectable()
export class SearchService {

  constructor(
    private http: Http
  ) { }

  url: string = 'https://api.flickr.com/services/rest';

  private cachedResults: any[] = [];

  search(searchText: string): Observable<any> {
    console.log(searchText);

    let params = new URLSearchParams();
    params.set('method', 'flickr.photos.search');
    params.set('format', 'json');
    params.set('api_key', 'fc185bf95cabe7001fda92298ff51d8f');
    params.set('action', 'opensearch');
    params.set('tags', searchText);
    params.set('per_page', '20');
    params.set('page', '1');
    params.set('media', 'photos');
    params.set('content_type', '7');
    params.set('format', 'json');
    params.set('nojsoncallback', '1');
    params.set('extras', 'realname , date_taken, tags');
    params.set('sort', 'date-posted-desc');

    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(
      'https://api.flickr.com/services/rest',
      requestOptions
    ).map(response => {

this.cachedResults = [];

      let jsonRes = response.json().photos.photo;
      for (let i = 0; i < jsonRes.length; i++) {
        let owner = jsonRes[i].owner;
        let farm = jsonRes[i].farm;
        let id = jsonRes[i].id;
        let secret = jsonRes[i].secret;
        let server = jsonRes[i].server;
        let title = jsonRes[i].title;
        let realname = jsonRes[i].realname;
        let datetaken = jsonRes[i].datetaken;
        let page = jsonRes[i].page;
        let tags = jsonRes[i].tags;

        let redirect = 'https://www.flickr.com/photos/' + owner + '/' + id;
        let photoUrl = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';

        this.cachedResults.push({url: photoUrl, title: title,realname: realname,datetaken: datetaken,text: searchText,
          redirect: redirect, tags:tags});
      }

      return response.json().photos.photo;
    });

  }

  public getCachedResults(): any[] {
    return this.cachedResults;
  }

}
