import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserInput {
  // The @Field() decorator is used to define fields that should be exposed in the GraphQL schema for this input type.
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsStrongPassword()
  password: string;
}
