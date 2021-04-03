import { OnInit, Component } from '@angular/core';
import { FazendaService } from './services/fazenda/fazenda.service';
import { ProdutividadeService } from './services/produtividade/produtividade.service';

import { Fazenda } from '../app/models/Fazenda';
import { Talhao } from '../app/models/Talhao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  constructor(
    private fazendaService: FazendaService,
    private produtividadeService: ProdutividadeService) {}

  fazendas: Fazenda[] = [];
  fazendaSelecionada: Fazenda;
  isModalOpen: boolean = false;

  async ngOnInit() {
    this.fazendas = await this.fazendaService.getFazendas();
    this.populaProdutividade();
  }

  onModalOpen(i: number) {
    this.isModalOpen = true;
    this.fazendaSelecionada = this.fazendas[i]
  }

  onModalClose() {
    this.isModalOpen = false;
  }

  populaProdutividade(): void {
    this.fazendas.map((fazenda: Fazenda) => {
      fazenda.produtividade = this.produtividadeService.calculaProdutividadeFazenda(fazenda);
      this.populaProdutividadeTalhoes(fazenda.talhoes);
    });
  }

  populaProdutividadeTalhoes(talhoes: Talhao[]): void {
    talhoes.map((talhao: Talhao) => {
      talhao.produtividade = this.produtividadeService.calculaProdutividadeTalhao(talhao);
    });
  }
}
