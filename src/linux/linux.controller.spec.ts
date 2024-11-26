import { Test, TestingModule } from '@nestjs/testing';
import { LinuxController } from './linux.controller';

describe('LinuxController', () => {
  let controller: LinuxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinuxController],
    }).compile();

    controller = module.get<LinuxController>(LinuxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
