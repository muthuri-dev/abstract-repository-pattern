import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UserRepository } from 'src/repositories/user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  async createUser(data: CreateUserInput): Promise<Omit<User, 'email'>> {
    return await this.usersRepository.create(data);
  }

  async getAllUsers(): Promise<Array<Omit<User, 'email'>>> {
    return await this.usersRepository.findAll();
  }
}
