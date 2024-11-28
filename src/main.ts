import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';
const logger = new Logger("SchoolSearch")

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3050);
  logger.log("logged into neis open api portal with token: " + process.env.KEY)
}

bootstrap();