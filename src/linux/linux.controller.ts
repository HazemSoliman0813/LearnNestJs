import { Controller, Get, Param, HttpCode, Post, Header, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateLinuxDto } from './dto/create-linux.dto';
import { LinuxService } from './linux.service';
import { linux } from './interfaces/linux.interface';

@Controller('linux')
export class LinuxController {
  constructor(private linuxService: LinuxService) {}

  @Get()
  async findAll(): Promise<linux[]> {
    return this.linuxService.findAll();
  }

  @Get('distro/:name?')
  @HttpCode(208)
  getDistro(@Param('name') name: string, req: Request): string {
    return `Linux Distro ${name}`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  async create(@Body() createlinuxdto:CreateLinuxDto): Promise<void> {
    return this.linuxService.create(createlinuxdto);
  }
}
