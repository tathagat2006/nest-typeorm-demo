import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  async getAllArticles() {
    return 'All articles'
  }
}
