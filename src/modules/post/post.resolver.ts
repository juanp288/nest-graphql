import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from '../authors/entities/author.entity';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post, { name: 'createPost' })
  create(@Args('createPostInput') data: CreatePostInput) {
    return this.postService.create(data);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  // @ResolveField(() => Author)
  // findByAuthor(@Parent() post: Post): Promise<Author> {
  //   const { author } = post;
  //   return this.postService.getByAuthor(author.id);
  // }
}
