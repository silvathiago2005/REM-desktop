import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-locacao',
  templateUrl: './show-locacao.component.html',
  styleUrls: ['./show-locacao.component.css']
})
export class ShowLocacaoComponent implements OnInit {

  NomeLocatario = 'Thiago Lopes da Silva';
  NomeLocador = 'Alex cucci';
  EnderecoCompleto = 'Rua Julio de Mesquita Filho, 184 - Parque Gerassi - Santo André';
  ValorAluguel = 'R$ 1.000,00';
  CodRegistro = '100';
  Garantia = 12;
  PrazoInicial = '10/01/2021';
  PrazoFinal = '10/01/2024';
  ValorIptu = "R$ 1.600,00";
  ValorCondominio = "R$ 300,00";
  TipoAgua = 'Individual';
  TipoLuz = 'Individual';
  ValorGas = 'R$ 65,00';
  ValorDesconto = 'R$ 100,00';
  TempoDesconto = 'Janeiro/2021';
  Reajuste = 'Janeiro';
  Valor = 'R$ 900,00';
  DataPagamento = '15/01/2021';
  PorcentagemMulta = '15';
  QuantoIsencaoMulta = '18 meses';

  constructor() { }

  ngOnInit(): void {
  }

}
