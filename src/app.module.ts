import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule, PostModule } from './modules';
import { Post } from './modules/post/entities/post.entity';
import { Author } from './modules/authors/entities/author.entity';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/db/database.sqlite',
      entities: [Post, Author],
      synchronize: true,
    }),
    PostModule,
    AuthorsModule,
  ],
})
export class AppModule {}
