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

  url: string = "http://localhost/api/";

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI> {

    let direccion = this.url;
    console.log(direccion);
    return this.http.post<ResponseI>(direccion, form);
  }

  getAllPlanes(): Observable<ListaAvionesI[]> {
    let direccion = this.url + "aviones/getPlanes";
    console.log(direccion);
    return this.http.get<ListaAvionesI[]>(direccion);
  }

  getPlaneById(id: any): Observable<AvionI[]> {
    let direccion = this.url + "aviones/getPlanesById/" + id;
    console.log(direccion);
    return this.http.get<AvionI[]>(direccion);
  }

  getPlane(id: any): Observable<AvionI> {
    let direccion = this.url + "aviones/getPlanesById/" + id;
    console.log(direccion);
    return this.http.get<AvionI>(direccion);
  }

  postPlane(avion: AvionI): Observable<AvionI>{
    return this.http.post<AvionI>(this.url + "aviones/addPlane", avion);
  }

  deletePlane(id: any): Observable<AvionI> {
    console.log("Entra ID: " + id);
    let direccion = this.url + "aviones/deletePlane/" + id;
    console.log(direccion);
    return this.http.delete<AvionI>(direccion);
  }

  getAllFlights(): Observable<ListaVuelosI[]> {
    let direccion = this.url + "vuelos/getFlights";
    console.log(direccion);
    return this.http.get<ListaVuelosI[]>(direccion);
  }

  getFlightById(id: any): Observable<AvionI[]> {
    let direccion = this.url + "vuelos/getFlightById/" + id;
    console.log(direccion);
    return this.http.get<AvionI[]>(direccion);
  }

  postFlight(vuelo: ListaVuelosI): Observable<ListaVuelosI>{
    return this.http.post<ListaVuelosI>(this.url + "aviones/addPlane", vuelo);
  }

  deleteFlight(id: any): Observable<ListaVuelosI> {
    console.log("Entra ID: " + id);
    let direccion = this.url + "vuelos/deleteFlight/" + id;
    console.log(direccion);
    return this.http.delete<ListaVuelosI>(direccion);
  }

}
