import { Test, TestingModule } from '@nestjs/testing';
import { EleBeanService } from './ele-bean.service';

describe('EleBeanService', () => {
  let service: EleBeanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EleBeanService],
    }).compile();

    service = module.get<EleBeanService>(EleBeanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
