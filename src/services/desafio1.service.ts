import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DesafioUmService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async execute(): Promise<any> {
      let token
  }

  async realizarLogin(): Promise<string> {

    // let response = await firstValueFrom(
    //   this.httpService.post(
    //     'http://localhost:3000/login',
    //     body
    //   )
    // );

    return ''
  }
}
