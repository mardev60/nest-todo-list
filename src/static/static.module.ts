import { MiddlewareConsumer, Module } from '@nestjs/common';
import { StaticController } from './static.controller';
import { StaticService } from './static.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [StaticController],
  providers: [StaticService],
})
export class StaticModule {
  configure(consumer : MiddlewareConsumer){
    consumer
        .apply(LoggerMiddleware)
        .forRoutes('/*');
}
}