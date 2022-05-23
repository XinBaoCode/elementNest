import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEleBeanDto } from './dto/create-ele-bean.dto';
import { UpdateEleBeanDto } from './dto/update-ele-bean.dto';
import { FindEleBeanDto } from './dto/find-ele-bean.dto';
import { EleBean } from './entities/ele-bean.entity';

@Injectable()
export class EleBeanService {
  constructor(
    @InjectRepository(EleBean) private eleBeanRepository: Repository<EleBean>,
  ) {}

  create(createEleBeanDto: CreateEleBeanDto) {
    return this.eleBeanRepository.save(createEleBeanDto);
  }

  findAll() {
    return this.eleBeanRepository.find();
  }

  findOne(id: string) {
    return this.eleBeanRepository.findOne({ where: { id: id } });
  }

  query(findEleBeanDto: FindEleBeanDto) {
    return this.eleBeanRepository.find({ where: findEleBeanDto });
  }

  update(id: string, updateEleBeanDto: UpdateEleBeanDto) {
    return this.eleBeanRepository.update(id, updateEleBeanDto);
  }

  remove(id: string) {
    return this.eleBeanRepository.softDelete(id);
  }
}
