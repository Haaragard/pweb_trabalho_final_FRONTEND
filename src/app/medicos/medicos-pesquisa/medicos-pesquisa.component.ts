import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../medicos.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-medicos-pesquisa',
  templateUrl: './medicos-pesquisa.component.html',
  styleUrls: ['./medicos-pesquisa.component.css']
})
export class MedicosPesquisaComponent implements OnInit {

  medicos = [];

  nomeBusca: string;

  constructor(
    private service: MedicosService,
    private msg: MessageService,
    private conf: ConfirmationService,
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.medicos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(medico:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+medico.nome+'?',
      accept: () => {
        this.excluir(medico);
      }
    });
  }

  excluir(medico: any){
    this.service.excluir(medico.id).then(()=>{
      this.pesquisar();
      this.msg.add({severity:'Excluido com Sucesso', summary:'Exclusão', detail:'Médico '+medico.nome+' excluído'});
    });
  }

}
