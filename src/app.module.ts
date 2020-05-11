import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './modules/articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'nestuser',
      password: 'nestpass',
      database: 'nestsample',
      entities: [Article],
      synchronize: true
    }),
    ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
