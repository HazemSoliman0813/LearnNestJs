import { Controller, Get, Param, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('linux')
export class LinuxController {

  @Get('distro/:name?')
  @HttpCode(208)
  getDistro(@Param('name') name: string, req: Request): string {
    return `Ubuntu Distro ${name}`;
  }
}
