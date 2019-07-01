import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MedicamentosService } from '../medicamentos.service';
import { MessageService } from 'primeng/api';
import { Medicamento } from '../model';

@Component({
  selector: 'app-medicamentos-cadastro',
  templateUrl: './medicamentos-cadastro.component.html',
  styleUrls: ['./medicamentos-cadastro.component.css']
})
export class MedicamentosCadastroComponent implements OnInit {

  medicamento = new Medicamento();
  sexos = [];

  constructor(
    private service: MedicamentosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    const codigoMedicamento = this.rota.snapshot.params['id'];
    if(codigoMedicamento){
      this.carregarMedicamento(codigoMedicamento);
    }
  }

  carregarMedicamento(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.medicamento = data;
      }
    );
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.medicamento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Medicamento '+this.medicamento.nome+' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.medicamento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Medicamento '+this.medicamento.nome+' alterado'});
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
    return Boolean(this.medicamento.id);
  }
}
