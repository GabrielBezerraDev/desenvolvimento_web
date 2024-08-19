import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAlunoRoutingModule } from './form-aluno-routing.module';
import { FormAlunoComponent } from './form-aluno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    FormAlunoComponent
  ],
  imports: [
    CommonModule,
    FormAlunoRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class FormAlunoModule { }
