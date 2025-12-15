import { Component } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {

  filtro: string = '';

  jugadores = [
    { nombre: 'Juan Pérez', equipo: 'Fútbol A', deporte: 'Fútbol' },
    { nombre: 'Luis Gómez', equipo: 'Fútbol B', deporte: 'Fútbol' },
    { nombre: 'Ana López', equipo: 'Baloncesto A', deporte: 'Baloncesto' },
    { nombre: 'Pedro Martínez', equipo: 'Baloncesto B', deporte: 'Baloncesto' },
    { nombre: 'Carlos Ruiz', equipo: 'Voleibol A', deporte: 'Voleibol' },
    { nombre: 'Marta Díaz', equipo: 'Tenis A', deporte: 'Tenis' }
  ];

  get jugadoresFiltrados() {
    const texto = this.filtro.toLowerCase().trim();

    if (!texto) {
      return this.jugadores;
    }

    return this.jugadores.filter(j =>
      j.nombre.toLowerCase().includes(texto) ||
      j.equipo.toLowerCase().includes(texto) ||
      j.deporte.toLowerCase().includes(texto)
    );
  }
}