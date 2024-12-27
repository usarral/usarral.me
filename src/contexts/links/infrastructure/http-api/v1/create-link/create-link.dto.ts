import {IsNotEmpty, IsOptional, IsDate} from "class-validator"
export class CreateLinkHttpDto {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  slug: string;

  @IsOptional()
  @IsDate()
  expirationTime: Date;
}
