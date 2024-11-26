import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinuxController } from './linux/linux.controller';

@Module({
  imports: [],
  controllers: [AppController, LinuxController],
  providers: [AppService],
})
export class AppModule {}
