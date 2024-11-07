import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];
  

  constructor(private _cursosService: CursosService) {
    this.nomePortal = 'http//cursos.training'
    this.cursos = this._cursosService.getCursos();
  }
  
  ngOnInit(): void {
  }

}
