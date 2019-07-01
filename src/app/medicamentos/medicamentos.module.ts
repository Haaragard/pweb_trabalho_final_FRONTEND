import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentosPesquisaComponent } from './medicamentos-pesquisa/medicamentos-pesquisa.component';
import { MedicamentosCadastroComponent } from './medicamentos-cadastro/medicamentos-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [MedicamentosPesquisaComponent, MedicamentosCadastroComponent],
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
    MedicamentosPesquisaComponent,
    MedicamentosCadastroComponent
  ],
  providers: [
    MessageService
  ]
})
export class MedicamentosModule { }
