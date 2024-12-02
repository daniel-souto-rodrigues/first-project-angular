import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';
import { AppRoutingModule } from '../app-routing.module';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [CursosService]
})
export class CursosModule { }
