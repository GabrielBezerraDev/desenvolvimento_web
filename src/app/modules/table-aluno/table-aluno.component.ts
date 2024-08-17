import { Component } from '@angular/core';
import { AlunoProtocol } from '../../shared/interfaces/AlunoProtocol';

@Component({
  selector: 'app-table-aluno',
  templateUrl: './table-aluno.component.html',
  styleUrl: './table-aluno.component.scss'
})
export class TableAlunoComponent {

  public alunos: Array<AlunoProtocol> =
   [
    {
      "matricula": "2024001",
      "nome": "Ana Souza",
      "idade": 20,
      "email": "ana.souza@example.com"
    },
    {
      "matricula": "2024002",
      "nome": "Carlos Pereira",
      "idade": 22,
      "email": "carlos.pereira@example.com"
    },
    {
      "matricula": "2024003",
      "nome": "Fernanda Lima",
      "idade": 19,
      "email": "fernanda.lima@example.com"
    },
    {
      "matricula": "2024004",
      "nome": "João Silva",
      "idade": 21,
      "email": "joao.silva@example.com"
    },
    {
      "matricula": "2024005",
      "nome": "Mariana Costa",
      "idade": 23,
      "email": "mariana.costa@example.com"
    }
  ]
  

}
