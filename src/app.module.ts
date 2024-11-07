import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { HttpModule } from '@nestjs/axios';
import { DesafioUmService } from './services/desafio1.service';
import { DesafioDoisService } from './services/desafio2.service';
import { DesafioTresService } from './services/desafio3.service';
import { DesafioQuatroService } from './services/desafio4.service';
import { DesafioCincoService } from './services/desafio5.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    DesafioUmService,
    DesafioDoisService,
    DesafioTresService,
    DesafioQuatroService,
    DesafioCincoService,
  ],
})
export class AppModule {}
