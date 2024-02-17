import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/modules/authors/entities/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column('varchar')
  @Field()
  title: string;

  @Column('varchar', { nullable: true })
  @Field({ nullable: true })
  content?: string;

  @ManyToOne(() => Author, (author) => author.posts, { lazy: true })
  @Field(() => Author, { nullable: true })
  author?: Author;
}
