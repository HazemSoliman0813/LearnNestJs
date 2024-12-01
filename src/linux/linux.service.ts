import { Injectable } from '@nestjs/common';
import { linux } from './interfaces/linux.interface'

@Injectable()
export class LinuxService {
  private readonly distros: linux[] = [];

  create(distro: linux): linux {
    this.distros.push(distro);
    return distro
  }

  findAll(): linux[] {
    return this.distros;
  }

}
