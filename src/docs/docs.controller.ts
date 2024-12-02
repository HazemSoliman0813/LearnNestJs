import { Controller, Redirect, Get, Query, Param, UsePipes, Body} from '@nestjs/common';
import { ParseIdPipe } from './Id.pipe';

@Controller('docs')
export class DocsController {

  @Get('doc/:id?')
  findDoc(@Param('id', ParseIdPipe) id: number) {
    return id;
  }

  @Get('stuff')
  @Redirect('/linux/distro/Arch')
  findRightStuff(@Query('stuff') stuff: string) {
    if(stuff === 'Hello') {
      return {url: '/'}
    }
  }
}
