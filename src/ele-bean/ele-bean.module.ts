import { Module } from '@nestjs/common';
import { EleBeanService } from './ele-bean.service';
import { EleBeanController } from './ele-bean.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EleBean } from './entities/ele-bean.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EleBean])],
  controllers: [EleBeanController],
  providers: [EleBeanService],
})
export class EleBeanModule {}
