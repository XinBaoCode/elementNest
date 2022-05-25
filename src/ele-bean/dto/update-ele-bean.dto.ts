import { PartialType } from '@nestjs/mapped-types';
import { CreateEleBeanDto } from './create-ele-bean.dto';
export class UpdateEleBeanDto extends PartialType(CreateEleBeanDto) {
  qq?: number;
  eleCookie?: string;
  beanNum?: number;
  todayEarn?: number;
  preEarn?: number;
  hasExpire?: number;
  extraInfo?: string;
}
