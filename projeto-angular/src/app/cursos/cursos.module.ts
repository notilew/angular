import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';

import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalhesComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
