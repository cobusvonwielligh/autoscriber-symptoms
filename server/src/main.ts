import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AA-API')
    .setDescription('Autoscriber Assessment API')
    .setVersion('0.1')
    .setLicense('MIT', 'https://www.mit.edu/~amini/LICENSE.md')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  
  
  const baseOriginUrl = 'http://localhost:5173/';
  
  app.enableCors(
  {
    //Todo: security improvement -> only allow baseOriginUrl
  });

  await app.listen(4200, "0.0.0.0");
}
bootstrap();
