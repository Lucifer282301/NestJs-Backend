import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  process.title = 'gateway';

  const logger = new Logger('GatewayBootstrap');

  const app = await NestFactory.create(GatewayModule);

  const port = Number(process.env.GATEWAY_PORT ?? 5000);

  app.enableShutdownHooks();

  await app.listen(port);

  logger.log(`Gateway is running at port ${port}`);
}

bootstrap();
