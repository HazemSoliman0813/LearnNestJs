import { Module } from '@nestjs/common';
import { LinuxController } from './linux.controller';
import { LinuxService } from './linux.service';

@Module({
  controllers: [LinuxController],
  providers: [LinuxService],
})
export class LinuxModule {}
