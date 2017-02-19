import {PipeTransform, Pipe} from "@angular/core";
import {Book} from "./book";

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: Book[], filterBy: string): Book[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((book: Book) =>
    book.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
