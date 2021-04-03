import { RegistroProducao } from './RegistroProducao';

export interface Talhao {
  area: number,
  produtividade: number,
  registroProducoes: RegistroProducao[]
}
