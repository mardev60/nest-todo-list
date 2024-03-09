import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticModule } from './dynamic/static.module';
import { DynamicModule } from './static/dynamic.module';

@Module({
  imports: [StaticModule, DynamicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
