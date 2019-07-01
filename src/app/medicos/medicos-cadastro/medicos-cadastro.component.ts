import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../medicos.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Medico } from '../model';
import { FormControl } from '@angular/forms';
import { Especialidade } from '../especialidade-model';

@Component({
  selector: 'app-medicos-cadastro',
  templateUrl: './medicos-cadastro.component.html',
  styleUrls: ['./medicos-cadastro.component.css']
})
export class MedicosCadastroComponent implements OnInit {

  medico = new Medico();
  sexos = [];
  especialidades: Especialidade[];

  constructor(
    private service: MedicosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarEspecialidades();
    this.pesquisarSexos();
    const codigoMedico = this.rota.snapshot.params['id'];
    if(codigoMedico){
      this.carregarMedico(codigoMedico);
    }
  }

  carregarMedico(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.medico = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.medico)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Médico '+this.medico.nome+' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.medico)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Médico '+this.medico.nome+' alterado'});
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
    return Boolean(this.medico.id);
  }

  pesquisarSexos(){
    this.service.listarSexos()
    .then((dados)=>{
      this.sexos=dados
      .map(e => ({ label: e.descricao, value: e.id }));
    });
  }

  pesquisarEspecialidades(){
    this.service.listarEspecialidades()
    .then((dados)=>{
      this.especialidades=dados;
    });
  }

}
