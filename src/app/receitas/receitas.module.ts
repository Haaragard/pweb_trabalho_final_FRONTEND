import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { PickListModule } from 'primeng/picklist';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasPesquisaComponent } from './receitas-pesquisa/receitas-pesquisa.component';
import { ReceitasCadastroComponent } from './receitas-cadastro/receitas-cadastro.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ReceitasPesquisaComponent, ReceitasCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    ToastModule,
    FormsModule,
    PickListModule,
    ConfirmDialogModule,
    RouterModule
  ],
  providers: [
    MessageService
  ]
})
export class ReceitasModule { }
