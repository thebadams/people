import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Person, Prisma } from '@prisma/client';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async createPerson(data: Prisma.PersonCreateInput): Promise<Person> {
    return this.prisma.person.create({
      data,
    });
  }

  async findPeople(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PersonWhereUniqueInput;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput;
  }): Promise<Person[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.person.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
