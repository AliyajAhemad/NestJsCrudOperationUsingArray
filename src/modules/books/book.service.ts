import { Injectable } from '@nestjs/common';
import { Book } from './book.dto';

@Injectable()
export class BookService {
  public book: Book[] = [];
  addBook(book: Book): string {
    this.book.push(book);
    return 'Added successfully ';
  }

  getAllBooks(): Book[] {
    return this.book;
  }

  deleteBook(bookID: string): string {
    this.book = this.book.filter((book) => {
      return book.id != bookID;
    });
    return 'book has been successfully deleted';
  }

  updateBook(book: Book): string {
    let index = this.book.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    this.book[index] = book;
    return 'book has been updated successfully';
  }
}
