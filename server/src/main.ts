import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AA-API')
    .setDescription('Autoscriber Assessment API')
    .setVersion('0.1')
    .addTag('Documentation')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  
  
  app.enableCors();
  await app.listen(4200);
}
bootstrap();
