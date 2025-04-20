import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectEntity } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectEntity])],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports: [ProjectService], 
})
export class ProjectModule {}
