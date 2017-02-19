import {Component} from "@angular/core";
import {BookService} from "./books/book.service";


@Component({
  selector: 'my-app',
  template: '<div><h1>{{pageTitle}}</h1><pm-books></pm-books></div>',
  providers: [BookService]
})
export class AppComponent  {
  pageTitle: string = 'Books management'

}
