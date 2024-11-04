import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  // outputs: ['mudouValor'] //outra forma de declarar outputs properties
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  decrement() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  increment() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
