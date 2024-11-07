import { Injectable, EventEmitter } from '@angular/core';

@Injectable(
  {providedIn: 'any'} //para cada serviço ter sua instância é necessário mudar para 'any' em vez de 'root'
)
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    console.log('**CursosService**');
  }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string)
  {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
