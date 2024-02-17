import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/modules/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Post, (post) => post.author, { lazy: true })
  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
