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

@NgModule({
  declarations: [
    TableAlunoComponent
  ],
  imports: [
    CommonModule,
    TableAlunoRoutingModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class TableAlunoModule { }
