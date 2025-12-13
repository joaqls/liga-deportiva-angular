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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CapitanComponent } from './pages/capitan/capitan.component';
import { ArbitroComponent } from './pages/arbitro/arbitro.component';

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
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UsuarioComponent,
    CapitanComponent,
    ArbitroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
