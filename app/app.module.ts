import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
import { SearchComponent }  from './search/search.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { ImageBoxComponent }  from './image-box/image-box.component';

import { SearchService }  from './services/search.service';
import { UIService }  from './services/app-ui.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    GalleryComponent,
    ImageBoxComponent,
  ],
  providers: [
    SearchService,
    UIService,
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
