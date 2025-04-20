import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskEntity } from '../entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from '../project.module';

@Module({
  imports:[ TypeOrmModule.forFeature([TaskEntity]),ProjectModule],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
