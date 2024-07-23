import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<Omit<User, 'email'>> {
    return await this.usersService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<Array<Omit<User, 'email'>>> {
    return await this.usersService.getAllUsers();
  }
}
