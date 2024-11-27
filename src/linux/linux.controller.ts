import { Controller, Get, Param, HttpCode, Post, Header, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateLinuxDto } from './create-linux.dto';

@Controller('linux')
export class LinuxController {

  @Get('distro/:name?')
  @HttpCode(208)
  getDistro(@Param('name') name: string, req: Request): string {
    return `Linux Distro ${name}`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  async create(@Res() res: Response, @Body() createlinuxdto:CreateLinuxDto): Promise<void> {
    const message: string =  `This is Post method and its status code is ${res.statusCode}`
    await res.send(message);
  }
}
