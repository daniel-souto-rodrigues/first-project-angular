import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css'],
  providers: [CursosService] // Caso queira ter uma instância separada do serviço se declara dentro do @Component o provider
})
export class CreateCursoComponent implements OnInit {
  OnAddCurso(curso: string) {
    this._cursosService.addCursos(curso);
  }

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

}
