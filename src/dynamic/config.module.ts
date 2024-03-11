import { Module, DynamicModule } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static register(options: { folder: string }): DynamicModule {
    const { folder } = options;
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: folder,
        },
      ],
    };
  }
}