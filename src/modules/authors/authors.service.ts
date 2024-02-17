import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private readonly authorRepo: Repository<Author>,
  ) {}

  async create(data: CreateAuthorInput): Promise<Author> {
    return await this.authorRepo.save(this.authorRepo.create(data));
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepo.find();
  }

  async findOne(id: number): Promise<Author> {
    return await this.authorRepo.findOneBy({ id });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  async remove(id: number): Promise<Author> {
    const author = await this.findOne(id);
    return await this.authorRepo.remove(author);
  }
}
