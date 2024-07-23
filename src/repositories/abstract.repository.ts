import { PrismaService } from 'src/prisma/prisma.service';

export abstract class AbstractRepository<T, CreateInput, UpdateInput> {
  constructor(protected readonly prismaService: PrismaService) {}

  protected abstract get model(): {
    create: (data: { data: CreateInput }) => Promise<T>;
    findUnique: (params: { where: { id: string } }) => Promise<T | null>;
    findMany: () => Promise<Array<T>>;
    update: (params: {
      where: { id: string };
      data: UpdateInput;
    }) => Promise<T>;
    delete: (params: { where: { id: string } }) => Promise<T>;
  };

  async create(data: CreateInput): Promise<T> {
    return await this.model.create({ data });
  }

  async findOne(id: string): Promise<T | null> {
    return await this.model.findUnique({ where: { id } });
  }

  async findAll(): Promise<Array<T>> {
    return await this.model.findMany();
  }

  async update(id: string, data: UpdateInput): Promise<T> {
    return this.model.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<T> {
    return await this.model.delete({ where: { id } });
  }
}
