import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from './model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  receitasURL = 'http://localhost:8090/receitas';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      return this.http.get<any>(this.receitasURL + '/filtro?nome=' + filtro.nome).toPromise();
    } else {
      return this.http.get<any>(this.receitasURL).toPromise();
    }
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.receitasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(receita: Receita): Promise<any>{
    return this.http.post(this.receitasURL, receita)
    .toPromise();
  }

  alterar(receita: Receita): Promise<any>{
    return this.http.put(this.receitasURL+'/'+receita.id, receita)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Receita> {
    return this.http.get<Receita>(this.receitasURL+'/'+codigo).toPromise();
  }
}
