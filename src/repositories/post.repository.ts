import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { Post } from 'src/posts/entities/post.entity';
import { CreatePostInput } from 'src/posts/dto/create-post.input';
import { UpdatePostInput } from 'src/posts/dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsRepository extends AbstractRepository<
  Post,
  CreatePostInput,
  UpdatePostInput
> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  protected get model() {
    return this.prismaService.post;
  }
}
