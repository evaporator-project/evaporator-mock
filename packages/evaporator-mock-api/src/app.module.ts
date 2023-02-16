import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MockModule} from "./apps/mock/mock.module";
import {join} from "path";
// import { join } from 'path'
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [MockModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
