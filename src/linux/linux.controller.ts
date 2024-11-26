import { Controller, Get, Param, HttpCode, Post, Header, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('linux')
export class LinuxController {

  @Get('distro/:name?')
  @HttpCode(208)
  getDistro(@Param('name') name: string, req: Request): string {
    return `Linux Distro ${name}`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  create(@Res() res: Response): void {
    const message: string =  `This is Post method and its status code is ${res.statusCode}`
    res.send(message);
  }
}
