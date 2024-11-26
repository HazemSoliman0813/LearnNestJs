import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinuxController } from './linux/linux.controller';
import { DocsController } from './docs/docs.controller';

@Module({
  imports: [],
  controllers: [AppController, LinuxController, DocsController],
  providers: [AppService],
})
export class AppModule {}
