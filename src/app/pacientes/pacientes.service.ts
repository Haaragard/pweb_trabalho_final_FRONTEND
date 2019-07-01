import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from './model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientesURL = 'http://localhost:8090/pacientes';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      return this.http.get<any>(this.pacientesURL + '/filtro?nome=' + filtro.nome).toPromise();
    } else {
      return this.http.get<any>(this.pacientesURL).toPromise();
    }
  }

  listarSexos(): Promise<any> {
    return this.http.get<any>('http://localhost:8090/sexos').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.pacientesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(paciente: Paciente): Promise<any>{
    return this.http.post(this.pacientesURL, paciente)
    .toPromise();
  }

  alterar(paciente: Paciente): Promise<any>{
    return this.http.put(this.pacientesURL+'/'+paciente.id, paciente)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Paciente> {
    return this.http.get<Paciente>(this.pacientesURL+'/'+codigo).toPromise();
  }
}
