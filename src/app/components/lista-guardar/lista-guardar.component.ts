import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-guardar',
  templateUrl: './lista-guardar.component.html',
  styleUrls: ['./lista-guardar.component.css']
})
export class ListaGuardarComponent implements OnInit {

  nota:any ={
    textoNota: ''
  }
  vacio=false;
  constructor(private servicio:ConexionService) {

  }


  
  ngOnInit(): void {
  }
  agregar(){
    if(this.nota.textoNota==""){
      this.vacio = true;
    }else{
      this.vacio = false;
      this.servicio.agregarNota(this.nota);
      this.nota.textoNota="";
    }
  }
  cambiarClase(){
    this.vacio = false;
  }
}
