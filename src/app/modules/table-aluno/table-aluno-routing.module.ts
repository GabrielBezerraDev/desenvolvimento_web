import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableAlunoComponent } from './table-aluno.component';

const routes: Routes = [
  {
    path: "",
    component: TableAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableAlunoRoutingModule { }
