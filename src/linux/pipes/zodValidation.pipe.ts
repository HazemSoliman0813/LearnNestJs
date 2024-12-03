import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';


export class zodValidationPipe implements PipeTransform {
  constructor(private zodSchema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {

      const parsedValue = this.zodSchema.safeParse(value);
      if(parsedValue.success) return parsedValue;
      throw new BadRequestException(parsedValue.error.format());
  }
}
