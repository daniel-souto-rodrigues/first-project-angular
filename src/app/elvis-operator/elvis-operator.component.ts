import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

  tarefa: any =  {
    desc: 'descrição da tarefa',
    responsavel: {
      usuario: null
    }
    //responsavel: { nome: 'fulano'}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
