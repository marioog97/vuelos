import { ListaVuelosI } from 'src/app/modelos/listaVuelos.interface';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevovuelo',
  templateUrl: './nuevovuelo.component.html',
  styleUrls: ['./nuevovuelo.component.css']
})
export class NuevovueloComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  nuevoForm = new FormGroup({
    origen: new FormGroup(''),
    destino: new FormGroup(''),
    avion: new FormGroup(''),
    horaSalida: new FormGroup(''),
    horaLlegada: new FormGroup(''),
    numPasajeros: new FormGroup('')

  });

  ngOnInit(): void {
  }


  postForm() {

    var inputOrigen = (<HTMLInputElement>document.getElementById("compañia")).value;
    var inputDestino = (<HTMLInputElement>document.getElementById("inputDestino")).value;
    var idAvion = (<HTMLInputElement>document.getElementById("idAvion")).value;
    var inputHoraLlegada = (<HTMLInputElement>document.getElementById("inputHoraLlegada")).value;
    var inputHoraSalida = (<HTMLInputElement>document.getElementById("inputHoraSalida")).value;
    var inputCantMaxPas = (<HTMLInputElement>document.getElementById("inputCantMaxPas")).value;



    let vuelo: ListaVuelosI = {
      id: 0,
      origen: inputOrigen,
      destino: inputDestino,
      avion: Number(idAvion),
      horaSalida: new Date(inputHoraLlegada),
      horaLlegada: new Date(inputHoraSalida),
      numPasajeros: inputCantMaxPas
    }

    this.api.postFlight(vuelo).subscribe(data =>{
      console.log(data);
    })

  }

  salir(){
    this.router.navigate(['listas']);
  }

}
