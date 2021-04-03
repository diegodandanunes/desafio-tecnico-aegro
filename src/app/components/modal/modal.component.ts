import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Fazenda } from 'src/app/models/Fazenda';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent {

  constructor() { }

  @Input() fazendaSelecionada: Fazenda;
  @Output() modalClose = new EventEmitter();

  onModalClose() {
    this.modalClose.emit('modalClose')
  }
}
