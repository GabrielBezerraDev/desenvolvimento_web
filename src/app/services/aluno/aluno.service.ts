import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';
import { Observable } from 'rxjs';
import { AlunoProtocol } from '../../shared/interfaces/Aluno/AlunoProtocol';
import { AlunoProtocolPatch } from '../../shared/interfaces/Aluno/AlunoPatchProtocol';
import { ResponseDTO } from '../../shared/interfaces/ResponseDTO/ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private readonly httpClientService: HttpClientService) { }

  public getOneAluno(id:string):Observable<ResponseDTO<AlunoProtocol>>{
    return this.httpClientService.get<ResponseDTO<AlunoProtocol>>(`aluno/${id}`);
  }

  public getAllAlunos():Observable<ResponseDTO<Array<AlunoProtocol>>>{
    return this.httpClientService.get<ResponseDTO<Array<AlunoProtocol>>>(`aluno/all`);
  }

  public postAluno(body:AlunoProtocol):Observable<ResponseDTO<AlunoProtocol>>{
    return this.httpClientService.post<ResponseDTO<AlunoProtocol>,AlunoProtocol>(`aluno`,body);
  }

  public patchOneAluno(id:string,body:AlunoProtocolPatch):Observable<ResponseDTO<AlunoProtocol>>{
    return this.httpClientService.patch<ResponseDTO<AlunoProtocol>,AlunoProtocolPatch>(`aluno/${id}`,body);
  }

  public deleteOneAluno(id:string):Observable<ResponseDTO<AlunoProtocol>>{
    return this.httpClientService.delete<ResponseDTO<AlunoProtocol>>(`aluno/${id}`);
  }

}
