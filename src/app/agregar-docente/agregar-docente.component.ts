import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from '../docente';
import { DocenteService } from '../docente.service';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  docente : Docente = new Docente();
  constructor(private docenteServicio:DocenteService, private router:Router){ }

  ngOnInit(): void {
     
  }

  guardarDocente(){
    this.docenteServicio.agregarDocente(this.docente).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeDocentes();
     }, error => console.log(error));
  }

  irAlaListaDeDocentes(){
    this.router.navigate(['/docentes']);
  }
  
  onSubmit(){
    this.guardarDocente();
  }

}
