import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { Prisma } from '@prisma/client';
@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}
  @Post()
  async createPerson(@Body() body: Prisma.PersonCreateInput) {
    const newPerson = await this.personService.createPerson(body);
    return newPerson;
  }

  @Get()
  async getPeople(
    @Query()
    query: {
      skip?: number;
      take?: number;
      cursor?: Prisma.PersonWhereUniqueInput;
      where?: Prisma.PersonWhereInput;
      orderBy?: Prisma.PersonOrderByWithRelationInput;
    },
  ) {
    const people = await this.personService.findPeople(query);
    return people;
  }
}
