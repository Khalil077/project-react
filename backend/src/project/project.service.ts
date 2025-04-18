import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entity/project.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectEntity) 
        private ProjectRep: Repository<ProjectEntity>, 
      ) {}

    create(project): Promise<ProjectEntity> { 

        return this.ProjectRep.save(project); 
    }

    findall() {
        return this.ProjectRep.find()
    }

    findbyid(id) { 
        return this.ProjectRep.find( { 
            where: {_id:new ObjectId(id)}
        })
    }

    async softdelete(id: string) {//mongodb does not support soft delete 
        const objectId = new ObjectId(id);
    
        const project = await this.ProjectRep.preload({ _id: objectId });
    
        if (!project) {
            throw new Error("Project not found");
        }
    
        project.deleteAt = new Date();
        return this.ProjectRep.save(project);
    }

    async updateproject(project,id) { 
        const objectId = new ObjectId(id);
        let b= await this.ProjectRep.preload(
           { _id:objectId ,
              ...project
           }
        ) 
        if (!b) throw new NotFoundException(`project with id "${id}" not found`) 
         this.ProjectRep.save(b)
        return (b)     

      }


}
