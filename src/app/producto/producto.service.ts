import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl=`${environment.apiUrl}/Producto`;
  constructor(private http:  HttpClient) { }


  obtener():Observable<any>{
    return this.http.get(this.apiUrl)
  }
  obtenerID(codigo : String):Observable<any>{
    const purl= `${this.apiUrl}/${codigo}`;
    return this.http.get(purl)
  }

  public Guardar (data : any):Observable<any>{
    return this.http.post<any>(this.apiUrl,data,httpOptions);
  }
  public Modificar (codigo : number,data : any):Observable<any>{
    const purl= `${this.apiUrl}/${codigo}`;
    return this.http.put<any>(purl,data,httpOptions);
    
  }
  DeleteID(id : String):Observable<any>{
    const purl= `${this.apiUrl}/${id}`;
    return this.http.delete(purl)
  }


}
