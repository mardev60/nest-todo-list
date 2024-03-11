import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
@Controller('dynamic')
export class ConfigController {
  constructor(private readonly configService : ConfigService) {}

  @Get('api-key')
  getApiKey(): string {
    return this.configService.get('apiKey');
  }

  @Get('dbname')
  getDbName(): string {
    return this.configService.get('dbName');
  }
}