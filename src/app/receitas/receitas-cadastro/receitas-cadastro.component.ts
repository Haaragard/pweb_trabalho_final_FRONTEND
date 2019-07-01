import { ActivatedRoute } from '@angular/router';
import { Especialidade } from './../../medicos/especialidade-model';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/pacientes/pacientes.service';
import { MedicosService } from 'src/app/medicos/medicos.service';
import { ReceitasService } from '../receitas.service';
import { Receita } from '../model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-receitas-cadastro',
  templateUrl: './receitas-cadastro.component.html',
  styleUrls: ['./receitas-cadastro.component.css']
})
export class ReceitasCadastroComponent implements OnInit {

  receita = new Receita();
  medicos = [];
  pacientes = [];
  especialidades: Especialidade[];

  constructor(
    private service: ReceitasService,
    private medicoService: MedicosService,
    private pacienteService: PacientesService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarEspecialidades();
    this.pesquisarMedicos();
    this.pesquisarPacientes();
    const codigoMedico = this.rota.snapshot.params['id'];
    if(codigoMedico){
      this.carregarMedico(codigoMedico);
    }
  }

  carregarMedico(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.receita = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.receita)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Receita cadastrada'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.receita)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Receita alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.receita.id);
  }

  pesquisarMedicos(){
    this.medicoService.pesquisar('')
    .then((dados)=>{
      this.medicos=dados
      .map(e => ({ label: e.nome, value: e.id }));
    });
  }

  pesquisarPacientes(){
    this.pacienteService.pesquisar('')
    .then((dados)=>{
      this.pacientes=dados
      .map(e => ({ label: e.nome, value: e.id }));
    });
  }

  pesquisarEspecialidades(){
    this.medicoService.listarEspecialidades()
    .then((dados)=>{
      this.especialidades=dados;
    });
  }

}
