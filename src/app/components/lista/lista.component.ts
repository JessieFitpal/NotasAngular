import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  notas:any;
  constructor(private conexion:ConexionService) { 
    this.conexion.listaNota().subscribe(nota=>{
      this.notas = nota;
      console.log(this.notas);
    })
  }
    
  ngOnInit(): void {
  }
  eliminar(nota: any){
    this.conexion.eliminarNota(nota);
  }
}
