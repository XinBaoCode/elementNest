import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EleBeanModule } from './ele-bean/ele-bean.module';

@Module({
  imports: [
    EleBeanModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'element.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
