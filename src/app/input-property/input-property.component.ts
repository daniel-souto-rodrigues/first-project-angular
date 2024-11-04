import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso:nome']//outra maneira de passar properties com nomes diferentes entre componentes
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
