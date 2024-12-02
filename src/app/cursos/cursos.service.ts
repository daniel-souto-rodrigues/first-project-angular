import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable(
  { providedIn: 'any' } //para cada serviço ter sua instância é necessário mudar para 'any' em vez de 'root'
)
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: any[] =
    [
      { id: 1, nome: 'Java' },
      { id: 2, nome: 'Ext JS' },
      { id: 3, nome: 'Angular' }
    ];

  constructor(private _logService: LogService) {
    console.log('**CursosService**');
  }

  getCursos() {
    this._logService.consoleLog('Obtendo Lista de cursos!')
    return this.cursos;
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    let resultado = cursos.find(c => c.id == id);
    if (resultado)
      return resultado;
    else
      return null;
  }

  addCursos(curso: string) {
    this._logService.consoleLog(`Criando um novo curso! ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
