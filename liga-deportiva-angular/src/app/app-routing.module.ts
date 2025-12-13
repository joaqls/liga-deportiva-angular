import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { ClasificacionesComponent } from './pages/clasificaciones/clasificaciones.component';
import { ArbitrosComponent } from './pages/arbitros/arbitros.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'clasificaciones', component: ClasificacionesComponent },
  { path: 'arbitros', component: ArbitrosComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
