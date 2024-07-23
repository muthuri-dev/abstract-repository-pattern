import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserRepository } from 'src/repositories/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, UserRepository, PrismaService],
})
export class UsersModule {}
