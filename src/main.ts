import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpLoggingInterceptor } from './http-logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NextGen 2025')
    .setDescription('Olá, pessoas candidatas, que vocês sejam muito bem-vindas!!!\n\nEsta é a API que utilizaremos para executar as lógicas dos desafios que irão implementar ao longo desse dia.\n\nNo endereço abaixo vocês acessam a documentação da API já existente de algumas funcionalidades, elas servirão os dados necessários para a implementação de todos problemas\n- Pedir a url do serviço legado com seu Jedi\n\nBom desafio para vocês!!!\nPARA TODAS AS REQUISIÇÕES DEVE SER UTILIZADO O HEADER "nextgen-group" COM VALOR  FORNECIDO PELO JEDI')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalInterceptors(new HttpLoggingInterceptor());

  await app.listen(3001);
}
bootstrap();
