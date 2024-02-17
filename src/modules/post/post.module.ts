import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { AuthorsModule } from '../';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule],
  providers: [PostService, PostResolver],
})
export class PostModule {}
