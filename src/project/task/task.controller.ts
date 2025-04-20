import { Body, Controller, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private TaskSer:TaskService){}
    
 @Post('add/:id')
    modifierproject(@Body() body,@Param('id') id ) {
        return this.TaskSer.addtask(id,body)

    }


}
