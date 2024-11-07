import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos.service';
import { CreateCursoComponent } from './create-curso.component';
import { ReceiveCreatedCursoComponent } from '../receive-created-curso/receive-created-curso.component';



@NgModule({
  declarations: [
    CreateCursoComponent,
    ReceiveCreatedCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCursoComponent
  ],
  // providers: [CursosService]
})
export class CreateCursoModule { }
