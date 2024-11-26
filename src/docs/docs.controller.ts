import { Controller, Redirect, Get, Query} from '@nestjs/common';

@Controller('docs')
export class DocsController {

  @Get('stuff')
  @Redirect('/linux/distro/Arch')
  findRightStuff(@Query('stuff') stuff: string) {
    if(stuff === 'Hello') {
      return {url: '/'}
    }
  }
}
