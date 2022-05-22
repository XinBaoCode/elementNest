import { PartialType } from '@nestjs/mapped-types';
import { CreateEleBeanDto } from './create-ele-bean.dto';

export class UpdateEleBeanDto extends PartialType(CreateEleBeanDto) {}
