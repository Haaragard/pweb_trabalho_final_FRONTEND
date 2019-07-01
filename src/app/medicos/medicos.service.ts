import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from './model';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  medicosURL = 'http://localhost:8090/medicos';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      return this.http.get<any>(this.medicosURL + '/filtro?nome=' + filtro.nome).toPromise();
    } else {
      return this.http.get<any>(this.medicosURL).toPromise();
    }
  }

  listarSexos(): Promise<any> {
    return this.http.get<any>('http://localhost:8090/sexos').toPromise();
  }

  listarEspecialidades(): Promise<any> {
    return this.http.get<any>('http://localhost:8090/especialidades').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.medicosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(medico: Medico): Promise<any>{
    return this.http.post(this.medicosURL, medico)
    .toPromise();
  }

  alterar(medico: Medico): Promise<any>{
    return this.http.put(this.medicosURL+'/'+medico.id, medico)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Medico> {
    return this.http.get<Medico>(this.medicosURL+'/'+codigo).toPromise();
  }
}
