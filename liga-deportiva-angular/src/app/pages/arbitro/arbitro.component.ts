import { Component } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';

@Component({
  selector: 'app-arbitro',
  templateUrl: './arbitro.component.html'
})
export class ArbitroComponent {

  partidos: any[] = [];
  arbitro = 'arbitro1'; // simulación (login real se usaría después)

  constructor(private partidosService: PartidosService) {
    this.partidosService
      .obtenerPartidosPorArbitro(this.arbitro)
      .subscribe(data => this.partidos = data);
  }
}