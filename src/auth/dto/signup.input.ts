import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  @ApiProperty()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;
}
