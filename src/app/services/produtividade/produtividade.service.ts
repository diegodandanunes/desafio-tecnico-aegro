import { Injectable } from '@angular/core';

import { Fazenda } from 'src/app/models/Fazenda';
import { RegistroProducao } from 'src/app/models/RegistroProducao';
import { Talhao } from 'src/app/models/Talhao';

@Injectable({
  providedIn: 'root'
})
export class ProdutividadeService {

  constructor() { }

  calculaProdutividadeFazenda(fazenda: Fazenda): number {
    let somaProdutividadesTalhoes: number = 0;
    fazenda.talhoes.map((talhao: Talhao) => {
      somaProdutividadesTalhoes += this.calculaProdutividadeTalhao(talhao);
    });

    return somaProdutividadesTalhoes;
  }

  calculaProdutividadeTalhao(talhao: Talhao): number {
    let somaQuantidadesProduzidas: number = 0;

    talhao.registroProducoes.map((registro: RegistroProducao) => {
      somaQuantidadesProduzidas += registro.quantiaProduzida;
    });

    return somaQuantidadesProduzidas;
  }
}
