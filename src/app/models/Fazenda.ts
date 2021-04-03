import { Talhao } from './Talhao';

export interface Fazenda {
  id: number,
  name: string,
  produtividade: number
  talhoes: Talhao[],
}
