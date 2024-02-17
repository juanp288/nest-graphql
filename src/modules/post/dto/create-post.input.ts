import { Field, InputType } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreatePostInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  @Field()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(25)
  @Field({ nullable: true })
  content?: string;

  @IsInt()
  @Field({ nullable: true })
  authorId?: number;
}
