import { IsString, Length } from "class-validator";

export class CreateLinuxDto {
  @IsString()
  @Length(5, 10, {groups:['create']})
  @Length(5, 12, {groups:['update']})
  distro: string;
  @IsString()
  @Length(3, 4, {message: "error on length"})
  version: string;
}