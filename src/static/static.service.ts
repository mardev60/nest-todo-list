import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticService {
  private todos: string[] = ['Todo 1', 'Todo 2', 'Todo 3'];

  findAll(): string[] {
    return this.todos;
  }
}