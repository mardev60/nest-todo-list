import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  private todos: string[] = ['Dynamic Todo 1', 'Dynamlic Todo 2', 'Dynamic Todo 3'];

  findAll(): string[] {
    return this.todos;
  }
}