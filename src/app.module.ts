import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinuxController } from './linux/linux.controller';
import { DocsController } from './docs/docs.controller';
import { LinuxService } from './linux/linux.service';

@Module({
  imports: [],
  controllers: [AppController, LinuxController, DocsController],
  providers: [AppService, LinuxService],
})
export class AppModule {}
