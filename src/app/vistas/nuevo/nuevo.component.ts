import { AvionI } from 'src/app/modelos/avion.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {


  constructor(private api: ApiService, private router: Router) { }

  nuevoForm = new FormGroup({
    id: new FormControl(''),
    compania: new FormControl(''),
    cantidadMaxPasajeros: new FormControl(''),
    peso: new FormControl(''),
    ruido: new FormControl('')
  });

  ngOnInit(): void {
  }


  postForm() {
    var inputCompania = (<HTMLInputElement>document.getElementById("compañia")).value;
    var inputCantidad = (<HTMLInputElement>document.getElementById("cantPas")).value;
    var inputPeso = (<HTMLInputElement>document.getElementById("peso")).value;
    var inputRuido = (<HTMLInputElement>document.getElementById("inputState")).value;

    let avion: AvionI = {
      id: 60,
      compania: inputCompania,
      cantidadMaxPasajeros: Number(inputCantidad),
      peso: Number(inputPeso),
      ruido: Number(inputRuido)
    }

    console.log(avion);

    this.api.postPlane(avion).subscribe(data =>{
      console.log(data);
    });

  }

}
