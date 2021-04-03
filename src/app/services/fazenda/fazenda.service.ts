import { Injectable } from '@angular/core';

import { FazendaRepository } from '../../repository/FazendaRepository';
import { Fazenda } from '../../models/Fazenda';

@Injectable({
  providedIn: 'root'
})
export class FazendaService {
  constructor(private fazendaRepository: FazendaRepository) {}

  async getFazendas() {
    const fazendas = await this.fazendaRepository.getFazendasJson();
    return fazendas;
  }
}
