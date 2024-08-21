import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';
import { Observable } from 'rxjs';
import { AlunoProtocol } from '../../shared/interfaces/AlunoProtocol';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private readonly httpClientService: HttpClientService) { }

  public getOneAluno(id:string):Observable<AlunoProtocol>{
    return this.httpClientService.get<AlunoProtocol>(`teste/${id}`);
  }

  public getTest():Observable<string>{
    return this.httpClientService.get<string>(`aluno/teste`);
  }

  public getAllAlunos():Observable<Array<AlunoProtocol>>{
    return this.httpClientService.get<Array<AlunoProtocol>>(`aluno/all`);
  }

  public postAluno(body:AlunoProtocol):Observable<AlunoProtocol>{
    return this.httpClientService.post<AlunoProtocol,AlunoProtocol>(`aluno`,body);
  }

  public patchOneAluno(id:string,body:AlunoProtocol):Observable<AlunoProtocol>{
    return this.httpClientService.patch<AlunoProtocol,AlunoProtocol>(`aluno/${id}`,body);
  }

  public deleteOneAluno(id:string):Observable<AlunoProtocol>{
    return this.httpClientService.delete<AlunoProtocol>(`aluno/${id}`);
  }

}
