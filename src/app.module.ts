import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticModule } from './static/static.module';
import { ConfigModule } from './dynamic/config.module';
import { ConfigController } from './dynamic/config.controller';

@Module({
  imports: [StaticModule, ConfigModule.register({ folder: './config' })],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
