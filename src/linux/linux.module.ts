import { Module } from '@nestjs/common';
import { LinuxController } from './linux.controller';
import { LinuxService } from './linux.service';
import { ParseStringPipe } from './parse-string.pipe';

@Module({
  controllers: [LinuxController],
  providers: [LinuxService, ParseStringPipe],
})
export class LinuxModule {}
