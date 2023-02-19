import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { Book } from './book.dto';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}
  //addBook
  @Post('/add')
  addBook(@Body() book: Book) {
    // Book.push(book);
    return this.bookService.addBook(book);
  }
  //getAllBooks
  @Get('/')
  getAllBooks() {
    return this.bookService.getAllBooks();
  }
  //updateBook
  @Put('/update')
  updateBook(@Body() book: Book) {
    return this.bookService.updateBook(book);
  }
  //deleteBook
  @Delete('delete/:id')
  deleteBook(@Param('id', ParseIntPipe) id: string) {
    return this.bookService.deleteBook(id);
  }
}
