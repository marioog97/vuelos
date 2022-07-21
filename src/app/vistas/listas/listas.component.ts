import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ListaVuelosI } from 'src/app/modelos/listaVuelos.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  vuelos: ListaVuelosI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllFlights().subscribe(data =>{
      this.vuelos=data;
    });
  }

  nuevoVuelo(){
    this.router.navigate(['nuevovuelo']);
  }
  eliminarVuelo(id: any){
    console.log("Pulsado " + id);
    this.api.deleteFlight(id);
  }

  buscarVuelo(){
    var inputValue = (<HTMLInputElement>document.getElementById("inputId")).value;
    this.api.getFlightById(inputValue).subscribe(data =>{
      console.log(data);
    });
}
}
