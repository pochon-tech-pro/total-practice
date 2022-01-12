import { IsNotEmpty, IsString } from 'class-validator';

export class PostParameters {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly tel: string;
}
