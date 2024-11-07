import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-receive-created-curso',
  templateUrl: './receive-created-curso.component.html',
  styleUrls: ['./receive-created-curso.component.css']
})
export class ReceiveCreatedCursoComponent implements OnInit {

  curso!: string;

  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {
    this._cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
