import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../receitas.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-receitas-pesquisa',
  templateUrl: './receitas-pesquisa.component.html',
  styleUrls: ['./receitas-pesquisa.component.css']
})
export class ReceitasPesquisaComponent implements OnInit {

  receitas = [];
  nomeBusca: string;

  constructor(
    private service: ReceitasService,
    private msg: MessageService,
    private conf: ConfirmationService,
  ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.receitas=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(receita:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir a receita com id: '+receita.id+'?',
      accept: () => {
        this.excluir(receita);
      }
    });
  }

  excluir(receita: any){
    this.service.excluir(receita.id).then(()=>{
      this.pesquisar();
      this.msg.add({severity:'Excluido com Sucesso', summary:'Exclusão', detail:'Receita excluída'});
    });
  }

}
