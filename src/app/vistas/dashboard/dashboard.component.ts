import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

import { Router } from '@angular/router';

import { ListaAvionesI } from 'src/app/modelos/listaAviones.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  aviones: ListaAvionesI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllPlanes().subscribe(data =>{
      this.aviones=data;
    })
  }

  editarAvion(id: any){
    this.router.navigate(['editar', id]);
  }

  nuevoAvion(){
    this.router.navigate(['nuevo']);
  }

  eliminarAvion(id: any){
    console.log("Pulsado " + id);
    this.api.deletePlane(id);
  }

  buscarAvion(){
    var inputValue = (<HTMLInputElement>document.getElementById("inputId")).value;
    this.api.getPlaneById(inputValue).subscribe(data =>{
      console.log(data);
    });
  }


}
