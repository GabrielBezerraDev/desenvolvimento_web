import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlunoComponent } from './form-aluno.component';

const routes: Routes = [
  {
    path: "",
    component: FormAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAlunoRoutingModule { }
