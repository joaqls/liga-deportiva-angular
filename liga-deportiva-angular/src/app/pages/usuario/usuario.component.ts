import { Component } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {

  partidos: any[] = [];
  equipo = 'Equipo A'; // simulación

  constructor(private partidosService: PartidosService) {
    this.partidosService
      .obtenerPartidosPorEquipo(this.equipo)
      .subscribe(data => this.partidos = data);
  }
}