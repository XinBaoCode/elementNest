import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { EleBeanService } from './ele-bean.service';
import { CreateEleBeanDto } from './dto/create-ele-bean.dto';
import { UpdateEleBeanDto } from './dto/update-ele-bean.dto';
import { FindEleBeanDto } from './dto/find-ele-bean.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('饿了么豆子')
@Controller('ele-bean')
export class EleBeanController {
  constructor(private readonly eleBeanService: EleBeanService) {}

  @Post()
  create(@Body() createEleBeanDto: CreateEleBeanDto) {
    return this.eleBeanService.create(createEleBeanDto);
  }

  @Get()
  findAll() {
    return this.eleBeanService.findAll();
  }

  @Get('/find')
  Query(@Query() findEleBeanDto: FindEleBeanDto) {
    return this.eleBeanService.query(findEleBeanDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.eleBeanService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateEleBeanDto: UpdateEleBeanDto) {
    return this.eleBeanService.update(id, updateEleBeanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eleBeanService.remove(id);
  }
}
