import { PickListModule } from 'primeng/picklist';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosPesquisaComponent } from './medicos-pesquisa/medicos-pesquisa.component';
import { MedicosCadastroComponent } from './medicos-cadastro/medicos-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    MedicosPesquisaComponent,
    MedicosCadastroComponent
  ],
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
    DropdownModule,
    PickListModule
  ],
  providers: [
    MessageService
  ]
})
export class MedicosModule { }
