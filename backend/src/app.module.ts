import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { ProjectEntity } from './project/entity/project.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost', 
    port: 27017, 
    database: 'BD-Projects', 
    synchronize: true, 
    logging: true,
    autoLoadEntities: true,  }),
    ProjectModule],
  controllers: [AppController],
  providers: [AppService,]
})
export class AppModule {}
