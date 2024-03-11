import { Injectable, Inject } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly config: any;

  constructor(@Inject('CONFIG_OPTIONS') private readonly folder: string) {
    const configFile = fs.readFileSync(`${folder}/config.json`, 'utf-8');
    this.config = JSON.parse(configFile);
  }

  get(key: string): any {
    return this.config[key];
  }
}