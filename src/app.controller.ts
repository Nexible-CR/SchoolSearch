import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("search")
  async getSchool(@Query("startStr") st: string) {
    const schoolList = await this.appService.getSchools(st);
    console. log(schoolList )
    return schoolList;
    
  }
}
