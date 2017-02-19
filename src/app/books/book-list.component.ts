import {Component, OnInit} from "@angular/core";
import {Book} from "./book";
import {BookService} from "./book.service";

@Component({
  selector: 'pm-books',
  templateUrl: 'app/books/book-list.component.html',
  styleUrls: ['app/books/book-list.component.css']
})

export class BookListComponent implements OnInit {

  pageTitle: string = "Book list"
  listFilter: string;
  books: Book[];
  errorMessage: string;

  model = new Book("", "", 1);

  constructor(private _bookService: BookService) {

  }

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(books => this.books = books,
      error => this.errorMessage = <any>error);
    console.log('In OnInit');
  }

  addBook() : void {
    this._bookService.addBook(this.model).subscribe(books => this.books = books, error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Book List: ' + message;
  }
}
