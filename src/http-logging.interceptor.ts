import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
const chalk = require('chalk')

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        tap({
          next: (data) => {
            // Aqui você pode lidar com respostas bem-sucedidas se necessário
          },
          error: (error) => {
            const data = error.response.data
            const statusCode = data.statusCode
            const statusMessage = data.error
            const message = data.message || 'Erro desconhecido';

            console.log(chalk.magenta(`\nStatus Code: ${statusCode} ${statusMessage}\nMensagem: ${message}\n`));
          },
        }),
      );
  }
}