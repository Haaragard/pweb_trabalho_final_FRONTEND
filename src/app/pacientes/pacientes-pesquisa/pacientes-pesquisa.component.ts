import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-pacientes-pesquisa',
  templateUrl: './pacientes-pesquisa.component.html',
  styleUrls: ['./pacientes-pesquisa.component.css']
})
export class PacientesPesquisaComponent implements OnInit {

  pacientes = [];

  nomeBusca: string;

  constructor(
    private service: PacientesService,
    private msg: MessageService,
    private conf: ConfirmationService,
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.pacientes=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(paciente:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+paciente.nome+'?',
      accept: () => {
        this.excluir(paciente);
      }
    });
  }

  excluir(paciente: any){
    this.service.excluir(paciente.id).then(()=>{
      this.pesquisar();
      this.msg.add({severity:'Excluido com Sucesso', summary:'Exclusão', detail:'Paciente '+paciente.nome+' excluído'});
    });
  }

}
