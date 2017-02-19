import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  private _getBooksUrl = 'http://localhost:8080/books/read';
  private _addBookUrl = 'http://localhost:8080/books/add';
  private _delBookUrl = 'http://localhost:8080/books/del';

  constructor(private _http: Http) {
  }

  getBooks(): Observable<Book[]> {
    return this._http.get(this._getBooksUrl)
      .map((response: Response) => <Book[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addBook(body: Object): Observable<Book[]> {
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers});

    return this._http.post(this._addBookUrl, body, options) // ...using post request
      .map((response: Response) => <Book[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if

  }

  deleteBook(body: Object): Observable<Book[]> {
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers});

    return this._http.post(this._delBookUrl, body, options) // ...using post request
      .map((response: Response) => <Book[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
