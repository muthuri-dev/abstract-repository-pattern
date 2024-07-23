import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostsRepository } from 'src/repositories/post.repository';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostsRepository) {}
  async create(data: CreatePostInput): Promise<Post> {
    return await this.postRepository.create(data);
  }

  async findAll(): Promise<Array<Post>> {
    return await this.postRepository.findAll();
  }
}
