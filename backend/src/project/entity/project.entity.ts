import { Column, Entity, ObjectIdColumn } from 'typeorm';
 import { TimeStamp } from '../generics/timestamp';
import { ObjectId } from 'mongodb';
 
 
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
 }