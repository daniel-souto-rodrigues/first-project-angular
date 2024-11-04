import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  onMouseOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  valorAtual: string = '';
  valorSalvo: any;
  isMouseOver: boolean = false;

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value.toString();
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
