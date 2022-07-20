import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required,),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }
  onLogin(){
    this.router.navigate(['dashboard']);
  }
}
