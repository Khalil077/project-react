import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost', 
    port: 27017, 
    database: 'BD-Projects', 
    synchronize: true, 
    logging: true,
  }),],
  controllers: [AppController],
  providers: [AppService,]
})
export class AppModule {}
