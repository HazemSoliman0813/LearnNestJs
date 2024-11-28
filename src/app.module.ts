import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinuxController } from './linux/linux.controller';
import { DocsController } from './docs/docs.controller';
import { LinuxService } from './linux/linux.service';
import { LinuxModule } from './linux/linux.module';

@Module({
  imports: [LinuxModule],
  controllers: [AppController, DocsController],
  providers: [AppService],
})
export class AppModule {}
