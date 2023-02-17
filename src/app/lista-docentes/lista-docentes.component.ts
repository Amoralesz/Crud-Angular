import { Component, OnInit } from '@angular/core';
import { Docente } from '../docente';
import { DocenteService } from '../docente.service';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent implements OnInit {

  docentes: Docente[];

  constructor(private docenteServicio:DocenteService) { }

  ngOnInit(): void {
    this.obtenerDocentes();
  }

  private obtenerDocentes(){
    this.docenteServicio.obtenerListaDeDocentes().subscribe(dato => {
      this.docentes = dato;
    });
  }
}
