import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    private readonly authorService: AuthorsService,
  ) {}

  async create(data: CreatePostInput): Promise<Post> {
    const { authorId } = data;

    const post = this.postRepo.create({
      ...data,
      author: await this.authorService.findOne(authorId),
    });

    return await this.postRepo.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepo.find();
  }

  async findOne(id: number): Promise<Post> {
    return await this.postRepo.findOneBy({ id });
  }

  // async getByAuthor(authorId: number) {
  //   return await this.authorService.findOne(authorId);
  // }
}
