import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  private apiUrl = 'http://localhost:3000/api/partidos';

  constructor(private http: HttpClient) {}

  obtenerPartidos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerPartidosPorArbitro(arbitro: string) {
    return this.http.get<any[]>(`${this.apiUrl}/arbitro/${arbitro}`);
  }

  obtenerPartidosPorEquipo(equipo: string) {
    return this.http.get<any[]>(`${this.apiUrl}/equipo/${equipo}`);
  }

  crearPartido(partido: any) {
    return this.http.post(this.apiUrl, partido);
  }
}