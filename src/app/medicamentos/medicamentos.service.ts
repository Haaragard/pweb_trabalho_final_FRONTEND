import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from './model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  medicamentosURL = 'http://localhost:8090/medicamentos';


  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      return this.http.get<any>(this.medicamentosURL + '/filtro?nome=' + filtro.nome).toPromise();
    } else {
      return this.http.get<any>(this.medicamentosURL).toPromise();
    }
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.medicamentosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(medicamento: Medicamento): Promise<any>{
    return this.http.post(this.medicamentosURL, medicamento)
    .toPromise();
  }

  alterar(medicamento: Medicamento): Promise<any>{
    return this.http.put(this.medicamentosURL+'/'+medicamento.id, medicamento)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Medicamento> {
    return this.http.get<Medicamento>(this.medicamentosURL+'/'+codigo).toPromise();
  }
}
