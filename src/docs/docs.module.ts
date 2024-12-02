import { Module } from '@nestjs/common';
import { DocsController } from './docs.controller';
import { ParseIdPipe } from './Id.pipe';

@Module({
  controllers: [DocsController],
  providers: [ParseIdPipe]
})
export class DocsModule {}
