import { Sexo } from './sexo-model';

export class Paciente{
    id: number;
    nome: string;
    sexo = new Sexo();
}