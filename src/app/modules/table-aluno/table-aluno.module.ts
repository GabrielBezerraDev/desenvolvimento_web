import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableAlunoRoutingModule } from './table-aluno-routing.module';
import { TableAlunoComponent } from './table-aluno.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    TableAlunoComponent
  ],
  imports: [
    CommonModule,
    TableAlunoRoutingModule,
    TableModule
  ]
})
export class TableAlunoModule { }
