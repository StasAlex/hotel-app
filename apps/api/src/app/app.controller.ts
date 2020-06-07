import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { Todo } from '@hotel-app/data';
import {
  ApiBody,
  ApiDefaultResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiDefaultResponse({ type: Todo })
  getData() {
    return this.appService.getData();
  }

  @Post('addTodo')
  @ApiCreatedResponse({ type: Todo })
  addTodo(@Body() todo: Todo) {
    return this.appService.addTodo();
  }
}
