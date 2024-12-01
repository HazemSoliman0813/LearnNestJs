import { Controller, Get, Param, HttpCode, Post, Header, Res, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { CreateLinuxDto } from './dto/create-linux.dto';
import { LinuxService } from './linux.service';
import { linux } from './interfaces/linux.interface';
import { ParseStringPipe } from './parse-string.pipe';

@Controller('linux')
export class LinuxController {
  constructor(private linuxService: LinuxService) {}

  @Get()
  async findAll(): Promise<linux[]> {
    return this.linuxService.findAll();
  }

  @Get('distro/:name?')
  @HttpCode(208)
  getDistro(@Param('name', ParseStringPipe) name: string, req: Request): string {
    return `Linux Distro ${name}`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  @UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true, groups:['create']}))
  async create(@Body() createlinuxdto:CreateLinuxDto): Promise<linux> {
    return this.linuxService.create(createlinuxdto);
  }
}
