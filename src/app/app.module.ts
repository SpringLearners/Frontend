import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {BookListComponent} from "./books/book-list.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BookFilterPipe} from "./books/book-filter.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookListComponent, BookFilterPipe, StarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
