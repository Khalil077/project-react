import { Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';
 import { TimeStamp } from '../generics/timestamp';
import { ObjectId } from 'mongodb';
import { TaskEntity } from './task.entity';
 
 
 @Entity('projects')
 export class ProjectEntity extends TimeStamp  { 
   @ObjectIdColumn()
   _id: ObjectId;
 
   @Column()
   title: string;
 
   @Column()
   description: string;
 
   @Column()
   date: Date;

   @OneToMany(() => TaskEntity, (task) => task.project, {} )
   ListeTasks: TaskEntity[];
 }