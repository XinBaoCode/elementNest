import { Test, TestingModule } from '@nestjs/testing';
import { EleBeanController } from './ele-bean.controller';
import { EleBeanService } from './ele-bean.service';

describe('EleBeanController', () => {
  let controller: EleBeanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EleBeanController],
      providers: [EleBeanService],
    }).compile();

    controller = module.get<EleBeanController>(EleBeanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
