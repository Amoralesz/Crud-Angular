import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from './docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  //Esta URL obtiene el listado de todos los docentes en el backend
  private baseUrl = "http://localhost:8080/administrar/docente";

  constructor(private httpClient : HttpClient) { }

  //Este metodo sirve para obtener los registros
  obtenerListaDeDocentes(): Observable<Docente[]>{
    return this.httpClient.get<Docente[]>(`${this.baseUrl}`);
  }
  //Este metodo sirve para agregar un nuevo docente a la lista
  agregarDocente(docente:Docente) : Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,docente); 
  }
}
