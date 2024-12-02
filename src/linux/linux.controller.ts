import { Controller, Get, Param, HttpCode, Post, Header, Body, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { LinuxService } from './linux.service';
import { linux } from './interfaces/linux.interface';
import { ParseStringPipe } from './pipes/parse-string.pipe';
import { zodValidationPipe } from './pipes/zodValidation.pipe';
import { CreateLinuxDtoSchema, createLinuxZodDto } from './dto/create-linuxzod.dto';

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
  @UsePipes(new zodValidationPipe(CreateLinuxDtoSchema))
  async create(@Body() createlinuxdto: createLinuxZodDto): Promise<linux> {
    return this.linuxService.create(createlinuxdto);
  }
}
