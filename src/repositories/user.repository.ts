import { Injectable } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { UpdateUserInput } from 'src/users/dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserRepository extends AbstractRepository<
  User,
  CreateUserInput,
  UpdateUserInput
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  protected get model() {
    return this.prismaService.user;
  }
}
