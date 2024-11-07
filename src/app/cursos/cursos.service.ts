import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable(
  {providedIn: 'any'} //para cada serviço ter sua instância é necessário mudar para 'any' em vez de 'root'
)
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor(private _logService: LogService) {
    console.log('**CursosService**');
  }

  getCursos() {
    this._logService.consoleLog('Obtendo Lista de cursos!')
    return this.cursos;
  }

  addCursos(curso: string)
  {
    this._logService.consoleLog(`Criando um novo curso! ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
