import { ListaVuelosI } from './../../modelos/listaVuelos.interface';
import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvionI } from 'src/app/modelos/avion.interface';
import { ListaAvionesI } from 'src/app/modelos/listaAviones.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost/api/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllPlanes():Observable<ListaAvionesI[]>{
    let direccion = this.url + "aviones/getPlanes";
    return this.http.get<ListaAvionesI[]>(direccion);
  }

  getPlane(id: any):Observable<AvionI>{
    let direccion = this.url + "aviones/getPlanesById/"+ id;
    return this.http.get<AvionI>(direccion);
  }

  deletePlane(id:any):Observable<AvionI>{
    console.log("Entra ID: "+ id);
    let direccion = this.url + "aviones/deletePlane/" + id;
    return this.http.delete<AvionI>(direccion);
  }

  getAllFlights():Observable<ListaVuelosI[]>{
    let direccion = this.url + "vuelos/getFlights";
    return this.http.get<ListaVuelosI[]>(direccion);
  }

  deleteFlight(id:any):Observable<AvionI>{
    console.log("Entra ID: "+ id);
    let direccion = this.url + "vuelos/deleteFlight/" + id;
    return this.http.delete<AvionI>(direccion);
  }

}
