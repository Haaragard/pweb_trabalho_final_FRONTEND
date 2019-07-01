import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';
import { PacientesCadastroComponent } from './pacientes-cadastro/pacientes-cadastro.component';

@NgModule({
  declarations: [PacientesPesquisaComponent, PacientesCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    DropdownModule
  ],
  exports: [
    PacientesPesquisaComponent,
    PacientesCadastroComponent
  ],
  providers: [
    MessageService
  ]
})
export class PacientesModule { }
