import {Body, Controller, Get, Post, UseGuards, Request, Query, Patch, Param} from '@nestjs/common'
import { MockService } from './mock.service'
@Controller()
export class MockController {
  constructor(
    private mockService: MockService,
  ) {}

  @Post('/mock')
  postMock(@Body() body): any {
    return this.mockService.create(body);
  }

  @Get('/mockdata/*')
  getMockData(@Param() param): any {
    return this.mockService.mockdata(param);
  }

  @Get('/mock')
  listMock(@Query() query): any {
    console.log(query,'query')
    return this.mockService.list(query);
  }

  @Patch('/mock')
  updateMock(@Query() query,@Body() body): any {
    // console.log(body)
    return this.mockService.update(body);
  }
}
