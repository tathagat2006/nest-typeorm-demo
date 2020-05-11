import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from 'src/entities/article.entity';
import { Repository } from 'typeorm'

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>
  ){}

  async getAllArticles(): Promise<Article[]> {
    return await this.articleRepository.find()
  }
}
