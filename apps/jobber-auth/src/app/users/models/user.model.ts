import { AbstractModel } from '@jobber/nestjs';
import { ObjectType } from '@nestjs/graphql';

// to mark as graphql schema and add to schema we have to use @ObjectType
@ObjectType()
export class User extends AbstractModel {
  email: string;
}
