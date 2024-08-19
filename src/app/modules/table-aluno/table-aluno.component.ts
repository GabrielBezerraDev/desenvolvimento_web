import { ChangeDetectorRef, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AlunoProtocol } from '../../shared/interfaces/AlunoProtocol';
import { Router } from '@angular/router';

interface Country {
  name?: string;
  code?: string;
}

interface Representative {
  name?: string;
  image?: string;
}
interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table-aluno',
  templateUrl: './table-aluno.component.html',
  styleUrl: './table-aluno.component.scss'
})
export class TableAlunoComponent implements OnInit {

constructor(private change: ChangeDetectorRef, private readonly router:Router){}

public alunos: WritableSignal<Array<AlunoProtocol>> =
signal(
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
    },
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
    },
    {
      "matricula": "2024001",
      "nome": "Bia Souza",
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
)

ngOnInit(): void {
  setTimeout(() => this.change.detectChanges(),1)
}

public teste():void{
  this.router.navigateByUrl("/form");
}



}
