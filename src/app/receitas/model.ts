import { Medicamento } from './../medicamentos/model';
import { Paciente } from './../pacientes/model';
import { Medico } from './../medicos/model';

export class Receita{
    id: number;
    medico = new Medico();
    paciente = new Paciente();
    medicamentos: Medicamento[] = [];
}