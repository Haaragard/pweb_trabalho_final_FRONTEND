import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from '../medicamentos.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-medicamentos-pesquisa',
  templateUrl: './medicamentos-pesquisa.component.html',
  styleUrls: ['./medicamentos-pesquisa.component.css']
})
export class MedicamentosPesquisaComponent implements OnInit {

  medicamentos = [];

  nomeBusca: string;

  constructor(
    private service: MedicamentosService,
    private msg: MessageService,
    private conf: ConfirmationService,
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.medicamentos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(medicamento:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+medicamento.nome+'?',
      accept: () => {
        this.excluir(medicamento);
      }
    });
  }

  excluir(medicamento: any){
    this.service.excluir(medicamento.id).then(()=>{
      this.pesquisar();
      this.msg.add({severity:'Excluido com Sucesso', summary:'Exclusão', detail:'Medicamento '+medicamento.nome+' excluído'});
    });
  }

}
