import { Sexo } from './sexo-model';
import { Especialidade } from './especialidade-model';

export class Medico{
    id: number;
    nome: string;
    sexo = new Sexo();
    especialidades: Especialidade[] = [];
}