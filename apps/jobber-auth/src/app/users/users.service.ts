import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma-clients/jobber-auth';
import { hash } from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  // as we have defined typed in@prisma-clients/jobber-auth'
  async createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }
}
