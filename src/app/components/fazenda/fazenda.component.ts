import { Component, Input, OnInit } from '@angular/core';
import { Fazenda } from 'src/app/models/Fazenda';

@Component({
  selector: 'app-fazenda',
  templateUrl: './fazenda.component.html',
  styleUrls: ['./fazenda.component.styl']
})
export class FazendaComponent {

  constructor() { }

  @Input() fazenda: Fazenda;
}
