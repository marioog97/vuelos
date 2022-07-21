import { AvionI } from './../../modelos/avion.interface';
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

  
  constructor(private api:ApiService, private router:Router) { }

nuevoForm = new FormGroup({
    id: new FormControl(''),
    compania: new FormControl(''),
    cantidadMaxPasajeros: new FormControl(''),
    peso: new FormControl(''),
    ruido: new FormControl('')
  });

  ngOnInit(): void {
  }

  postForm(form: AvionI){
    console.log(form);
  }

}
