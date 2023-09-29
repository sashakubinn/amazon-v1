import { PrismaService } from './prisma.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(4200);
}
bootstrap();
