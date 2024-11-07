import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos.service';
import { CreateCursoComponent } from './create-curso.component';



@NgModule({
  declarations: [
    CreateCursoComponent
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
