import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAlunoRoutingModule } from './form-aluno-routing.module';
import { FormAlunoComponent } from './form-aluno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingSpinnerModule } from '../../shared/modules/loading-spinner/loading-spinner.module';


@NgModule({
  declarations: [
    FormAlunoComponent
  ],
  imports: [
    CommonModule,
    FormAlunoRoutingModule,
    ProgressSpinnerModule,
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
