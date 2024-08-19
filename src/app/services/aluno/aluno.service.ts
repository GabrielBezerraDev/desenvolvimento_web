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
    alert("GET");
    return this.httpClientService.get<AlunoProtocol>(`teste/${id}`);
  }

  public getAllAlunos(id:string):Observable<Array<AlunoProtocol>>{
    return this.httpClientService.get<Array<AlunoProtocol>>(`teste`);
  }

  public postAluno(body:AlunoProtocol):Observable<AlunoProtocol>{
    alert("Fazendo um POST");
    return this.httpClientService.patch<AlunoProtocol,AlunoProtocol>(`teste`,body);
  }

  public patchOneAluno(id:string,body:AlunoProtocol):Observable<AlunoProtocol>{
    return this.httpClientService.patch<AlunoProtocol,AlunoProtocol>(`teste/${id}`,body);
  }

  public deleteOneAluno(id:string):Observable<AlunoProtocol>{
    return this.httpClientService.get<AlunoProtocol>(`teste/${id}`);
  }

}
