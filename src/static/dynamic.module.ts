import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DynamicController } from './dynamic.controller';
import { DynamicService } from './dynamic.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [DynamicController],
  providers: [DynamicService, LoggerMiddleware],
})
export class DynamicModule {
    configure(consumer : MiddlewareConsumer){
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('/dynamic');
    }
}