import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent implements OnInit {

  paciente = new Paciente();
  sexos = [];

  constructor(
    private service: PacientesService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarSexos();
    const codigoPaciente = this.rota.snapshot.params['id'];
    if(codigoPaciente){
      this.carregarPaciente(codigoPaciente);
    }
  }

  carregarPaciente(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.paciente = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.paciente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Paciente '+this.paciente.nome+' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.paciente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Paciente '+this.paciente.nome+' alterado'});
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
    return Boolean(this.paciente.id);
  }

  pesquisarSexos(){
    this.service.listarSexos()
    .then((dados)=>{
      this.sexos=dados
      .map(e => ({ label: e.descricao, value: e.id }));
    });
  }

}
