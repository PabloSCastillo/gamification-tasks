import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskSchema } from './schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tasks', schema: TaskSchema }
    ])
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule { }
