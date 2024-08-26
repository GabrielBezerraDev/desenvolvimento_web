import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableAlunoRoutingModule } from './table-aluno-routing.module';
import { TableAlunoComponent } from './table-aluno.component';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LoadingSpinnerModule } from '../../shared/modules/loading-spinner/loading-spinner.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableAlunoComponent
  ],
  imports: [
    CommonModule,
    TableAlunoRoutingModule,
    TableModule,
    LoadingSpinnerModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class TableAlunoModule { }
