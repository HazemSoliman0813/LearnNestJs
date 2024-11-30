import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseStringPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof(value) !== 'string') {
      return Error(`validation failed, expected string but got ${typeof(value)}`)
    }
    return value;
  }
}