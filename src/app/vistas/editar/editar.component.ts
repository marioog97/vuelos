import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AvionI } from 'src/app/modelos/avion.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private router: Router, private api: ApiService) { }

  datosAvion: AvionI | any;

  editarForm = new FormGroup({
    id: new FormControl(''),
    compania: new FormControl(''),
    cantidadMaxPasajeros: new FormControl(''),
    peso: new FormControl(''),
    ruido: new FormControl('')
  });

  ngOnInit(): void {
    let avionId = this.activerouter.snapshot.paramMap.get('id');
    console.log("hola" + avionId);
    this.api.getPlane(avionId).subscribe((data: any) => {

    });
  }

  eliminarAvion() {

  }

}
