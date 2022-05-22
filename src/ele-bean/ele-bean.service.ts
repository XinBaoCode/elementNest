import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEleBeanDto } from './dto/create-ele-bean.dto';
import { UpdateEleBeanDto } from './dto/update-ele-bean.dto';
import { EleBean } from './entities/ele-bean.entity';

@Injectable()
export class EleBeanService {
  constructor(
    @InjectRepository(EleBean) private usersRepository: Repository<EleBean>,
  ) {}

  create(createEleBeanDto: CreateEleBeanDto) {
    return this.usersRepository.save(createEleBeanDto);
  }

  findAll() {
    return `This action returns all eleBean`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eleBean`;
  }

  update(id: number, updateEleBeanDto: UpdateEleBeanDto) {
    return `This action updates a #${id} eleBean`;
  }

  remove(id: number) {
    return `This action removes a #${id} eleBean`;
  }
}
