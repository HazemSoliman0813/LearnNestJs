import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';


export class zodValidationPipe implements PipeTransform {
  constructor(private zodSchema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.zodSchema.parse(value);
      return parsedValue;
    } catch (error) {
      throw new BadRequestException('Schema parsing failed');
    }
  }
}
