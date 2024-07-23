import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsRepository } from 'src/repositories/post.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PostsResolver, PostsService, PostsRepository, PrismaService],
})
export class PostsModule {}
