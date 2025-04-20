import { Column, Entity, ManyToOne, ObjectId, ObjectIdColumn } from 'typeorm';
import { TimeStamp } from '../generics/timestamp';
import { ProjectEntity } from './project.entity';
 
 
@Entity('tasks')
export class TaskEntity extends TimeStamp  { 
 @ObjectIdColumn()
 _id: ObjectId;
 @Column()
 description: string;
 
 @ManyToOne(() => ProjectEntity 
   , (project) => project.ListeTasks, {
     eager: true,
     cascade: true,
   })
   project: ProjectEntity;
 }