import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDocenteComponent } from './agregar-docente/agregar-docente.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';

const routes: Routes = [
  {path: 'docentes', component:ListaDocentesComponent},
  {path: '', redirectTo: 'docentes', pathMatch: 'full'},
  {path: 'agregar-docente', component: AgregarDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
