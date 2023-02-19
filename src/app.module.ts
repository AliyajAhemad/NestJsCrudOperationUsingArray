import { Module } from '@nestjs/common';
import { BookModule } from './modules/books/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
