import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinuxModule } from './linux/linux.module';
import { DocsModule } from './docs/docs.module';

@Module({
  imports: [LinuxModule, DocsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
