import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { ClasificacionesComponent } from './pages/clasificaciones/clasificaciones.component';
import { ArbitrosComponent } from './pages/arbitros/arbitros.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EquiposComponent,
    JugadoresComponent,
    ClasificacionesComponent,
    ArbitrosComponent,
    ResultadosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
