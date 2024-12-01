import { IsString, isString, Length } from "class-validator";
import { group } from "console";

export class CreateLinuxDto {
  @IsString()
  @Length(5, 10, {groups:['create']})
  @Length(5, 12, {groups:['update']})
  distro: string;
  @IsString({always: true})
  @Length(3, 4, {message: "error on length"})
  version: string;
}