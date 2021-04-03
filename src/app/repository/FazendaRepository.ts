import { Injectable } from '@angular/core';
import axios from 'axios';

import { Fazenda } from '../models/Fazenda';

@Injectable({
  providedIn: 'root'
})
export class FazendaRepository {

  async getFazendasJson(): Promise<Fazenda[]> {
    const response = await axios.get<Fazenda[]>('../../assets/database-mock.json');
    return response.data;
  }

  constructor() { }

}
