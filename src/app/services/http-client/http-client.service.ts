import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private readonly IP_SERVER_LOCAL = "http://localhost:8080/";

  constructor(private readonly httpClient: HttpClient) { }

  public get<T>(url:string):Observable<T>{
    return this.httpClient.get<T>(`${this.IP_SERVER_LOCAL}${url}`);
  }

  public post<T,U>(url:string, body:U):Observable<T>{
    return this.httpClient.post<T>(`${this.IP_SERVER_LOCAL}${url}`,body);
  }

  public patch<T,U>(url:string, body:U):Observable<T>{
    return this.httpClient.patch<T>(`${this.IP_SERVER_LOCAL}${url}`,body);
  }

  public delete<T>(url:string):Observable<T>{
    return this.httpClient.delete<T>(`${this.IP_SERVER_LOCAL}${url}`);
  }

}
