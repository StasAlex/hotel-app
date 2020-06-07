import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty()
  title: string;
  @ApiProperty()
  number?: string;
}
