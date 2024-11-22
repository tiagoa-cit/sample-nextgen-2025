import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DesafioUmService } from 'src/services/desafio1.service';
import { DesafioDoisService } from 'src/services/desafio2.service';
import { DesafioTresService } from 'src/services/desafio3.service';
import { DesafioQuatroService } from 'src/services/desafio4.service';
import { DesafioCincoService } from 'src/services/desafio5.service';

@ApiTags('desafios')
@Controller()
export class AppController {
  constructor(
    private readonly desafio1Service: DesafioUmService,
    private readonly desafio2Service: DesafioDoisService,
    private readonly desafio3Service: DesafioTresService,
    private readonly desafio4Service: DesafioQuatroService,
    private readonly desafio5Service: DesafioCincoService,
  ) {}

  @Get('desafio-um')
  @ApiOperation({ description: 'O time da TechTaco começou a fazer a funcionalidade de autenticação de professores e alunos, mas não conseguiu terminar. Finalizar este ponto seria o primeiro passo a ser feito no escopo do projeto. A saída esperada para essa API é uma string com token de autenticação' })
  async getDesafioUm(): Promise<any> {
    // return await this.desafio1Service.execute();
  }

  @Get('desafio-dois/:cnpj')
  @ApiOperation({ description: 'O TalentTAP deve fornecer as credenciais para representantes de empresas que estejam interessadas em acessar o banco de talentos. Essa autenticação é feita a partir do CNPJ da empresa e em seguida precisamos garantir que recebemos um CNPJ válido e que possui o cadastro ativo. Para consulta do cadastro utilizar /valida-empresa do serviço fornecido.' })
  async getDesafioDois(): Promise<any> {
    // return await this.desafio2Service.execute(cnpj);
  }

  @Get('desafio-tres')
  @ApiOperation({ description: 'O TalentTAP substitui um sistema legado da MentorMunch que já possuía uma lista de empresas que foram migradas para o TalentTAP. Não existe garantia da consistência e validade dos dados dessas empresas, por isso será necessária uma verificação dos CNPJs pré existentes e atualizar-los em nossa base. Considerem utilizar a api do desafio 2 para validar os dados e as APIS do sefaz para buscar os dados corretos para fazer as atualizações necessárias.' })
  async getDesafioTres(): Promise<any> {
    // return await this.desafio3Service.execute();
  }

  @Get('desafio-quatro')
  @ApiOperation({ description: 'Um dos maiores desejos do PO do projeto é uma funcionalidade que consiga acelerar a filtragem de candidatos para possíveis oportunidades e contratações. Esse filtro deve funcionar as seguintes premissas/regras de negócio: \n1. Eu como empresa preciso de um relatório que contenha apenas alunos que possuam talentos que minha empresa tem interesse atualmente.\n2. Quero incluir nesse relatório apenas os talentos que sejam ensinados pelos 10 melhores professores que trabalhem em minha empresa.\n\n\t- Caso minha empresa tenho menos que 10 professores naqueles talentos, considerar professores de outras empresas também.\n3. Para esse relatório, quero ver a lista de talentos com seus respectivos feedbacks relativos a elas e que minha empresa tem interesse.\n\n\t- Existe um serviço que retorna a partir de um aluno, um talento e a avaliação atual daquele aluno, um racional do porquê daquela avaliação.' })
  async getDesafioQuatro(): Promise<any> {
    // return await this.desafio4Service.execute();
  }

  @Post('desafio-cinco')
  @ApiOperation({ description: 'A partir do retorno do desafio 4, gostaríamos de utilizar a IA para nos retornar para um aluno:\n1. Uma classificação do resultado do aluno entre as seguintes categorias:\n\n\t- Pode melhorar\n\n\t- Atende as Expectativas\n\n\t- Bom resultado\n\n\t- Excelente resultado\n2. Veredito para contratação\n\n\t- Esse resultado deve dizer se o aluno deve ser contratado ou não, e o porquê para tal decisão.' })
  async getDesafioCinco(
  ): Promise<any> {
    // return await this.desafio5Service.execute();
  }
}
