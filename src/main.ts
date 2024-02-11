import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JobsService } from './jobs/jobs.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.get(JobsService).startRepeatableJobs();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
