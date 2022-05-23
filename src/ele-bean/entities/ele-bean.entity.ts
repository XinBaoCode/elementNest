import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eleBean')
export class EleBean {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('int')
  qq: number;
  @Column('text')
  eleCookie: string;
  @Column('int')
  beanNum: number;
  @Column('int')
  todayEarn: number;
  @Column('int')
  preEarn: number;
  @Column('int')
  hasExpire: number;
  @Column('text')
  extraInfo: string;
}
