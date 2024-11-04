import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent implements OnInit {

  nome: string = 'abc';
  
  pessoa: any = {
    nome: '<default>',
    idade: 0,
    endereco: {
      rua: '<default>',
      numero: 0,
      cep: '<default>'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
