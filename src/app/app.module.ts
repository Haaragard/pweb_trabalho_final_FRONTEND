// import { ReceitasPesquisaComponent } from './receitas/receitas-pesquisa/receitas-pesquisa.component';
import { MedicosPesquisaComponent } from './medicos/medicos-pesquisa/medicos-pesquisa.component';
import { MedicosModule } from './medicos/medicos.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { PacientesCadastroComponent } from './pacientes/pacientes-cadastro/pacientes-cadastro.component';
import { ConfirmationService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesPesquisaComponent } from './pacientes/pacientes-pesquisa/pacientes-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { MedicamentosPesquisaComponent } from './medicamentos/medicamentos-pesquisa/medicamentos-pesquisa.component';
import { MedicamentosCadastroComponent } from './medicamentos/medicamentos-cadastro/medicamentos-cadastro.component';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { MedicosCadastroComponent } from './medicos/medicos-cadastro/medicos-cadastro.component';
import { ReceitasCadastroComponent } from './receitas/receitas-cadastro/receitas-cadastro.component';
import { ReceitasModule } from './receitas/receitas.module';
import { ReceitasPesquisaComponent } from './receitas/receitas-pesquisa/receitas-pesquisa.component';

const rotas: Routes = [
  {path: '', redirectTo:'pacientes', pathMatch:'full'},
  {path: 'pacientes', component: PacientesPesquisaComponent},
  {path: 'pacientes/novo', component: PacientesCadastroComponent},
  {path: 'pacientes/:id', component: PacientesCadastroComponent},
  {path: 'medicamentos', component: MedicamentosPesquisaComponent },
  {path: 'medicamentos/novo', component: MedicamentosCadastroComponent },
  {path: 'medicamentos/:id', component: MedicamentosCadastroComponent },
  {path: 'medicos', component: MedicosPesquisaComponent},
  {path: 'medicos/novo', component: MedicosCadastroComponent},
  {path: 'medicos/:id', component: MedicosCadastroComponent},
  {path: 'receitas', component: ReceitasPesquisaComponent},
  {path: 'receitas/novo', component: ReceitasCadastroComponent},
  {path: 'receitas/:id', component: ReceitasCadastroComponent},
  // {path: 'produtos/novo', component: ProdutosCadastroComponent},
  // {path: 'cidades', component: CidadesPesquisaComponent},
  // {path: 'cidades/novo', component: CidadesCadastroComponent},
  // {path: 'cidades/:id', component: CidadesCadastroComponent},
  // {path: 'produtos/novo', component: ProdutosCadastroComponent},
  
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    PacientesModule,
    MedicamentosModule,
    MedicosModule,
    ReceitasModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
